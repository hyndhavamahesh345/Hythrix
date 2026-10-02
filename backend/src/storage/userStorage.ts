import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { StoredUser, User, SignUpInput, SignInInput, AuthResponse } from "../types/authTypes";

const DATA_DIR = process.env.DATA_DIR || path.resolve(__dirname, "../../data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
}

function generateToken(user: User): string {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    issuedAt: Date.now(),
  };
  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

function verifyTokenPayload(token: string): { id: string; email: string } | null {
  try {
    const json = Buffer.from(token, "base64").toString("utf-8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}

// Initial demo user: demo@hythrix.com / demo1234
const DEMO_SALT = crypto.randomBytes(16).toString("hex");
const INITIAL_USERS: StoredUser[] = [
  {
    id: "USER-1001",
    name: "Vikram Malhotra",
    email: "demo@hythrix.com",
    company: "Malhotra Developers",
    role: "developer",
    passwordHash: hashPassword("demo1234", DEMO_SALT),
    salt: DEMO_SALT,
    createdAt: "2026-09-01T00:00:00.000Z",
    lastLoginAt: new Date().toISOString(),
  },
];

async function ensureDataDirectory(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    console.error("Error creating data dir for users:", err);
  }
}

export class UserStorage {
  private static async readAll(): Promise<StoredUser[]> {
    await ensureDataDirectory();
    try {
      const data = await fs.readFile(USERS_FILE, "utf-8");
      return JSON.parse(data) as StoredUser[];
    } catch {
      // If file doesn't exist yet, seed with initial demo user
      await this.writeAll(INITIAL_USERS);
      return INITIAL_USERS;
    }
  }

  private static async writeAll(users: StoredUser[]): Promise<void> {
    await ensureDataDirectory();
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
  }

  public static async register(input: SignUpInput): Promise<AuthResponse> {
    const users = await this.readAll();
    const normalizedEmail = input.email.trim().toLowerCase();

    const existing = users.find((u) => u.email.toLowerCase() === normalizedEmail);
    if (existing) {
      return { success: false, error: "An account with this email already exists." };
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const passwordHash = hashPassword(input.password, salt);
    const now = new Date().toISOString();

    const newUser: StoredUser = {
      id: `USER-${Math.floor(1000 + Math.random() * 9000)}`,
      name: input.name.trim(),
      email: normalizedEmail,
      company: input.company?.trim() || "Independent",
      role: input.role || "developer",
      passwordHash,
      salt,
      createdAt: now,
      lastLoginAt: now,
    };

    users.unshift(newUser);
    await this.writeAll(users);

    const safeUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      company: newUser.company,
      role: newUser.role,
      createdAt: newUser.createdAt,
      lastLoginAt: newUser.lastLoginAt,
    };

    const token = generateToken(safeUser);
    return { success: true, user: safeUser, token };
  }

  public static async authenticate(input: SignInInput): Promise<AuthResponse> {
    const users = await this.readAll();
    const normalizedEmail = input.email.trim().toLowerCase();

    const user = users.find((u) => u.email.toLowerCase() === normalizedEmail);
    if (!user) {
      return { success: false, error: "No account found with this email address." };
    }

    const inputHash = hashPassword(input.password, user.salt);
    if (inputHash !== user.passwordHash) {
      return { success: false, error: "Incorrect password. Please try again." };
    }

    user.lastLoginAt = new Date().toISOString();
    await this.writeAll(users);

    const safeUser: User = {
      id: user.id,
      name: user.name,
      email: user.email,
      company: user.company,
      role: user.role,
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
    };

    const token = generateToken(safeUser);
    return { success: true, user: safeUser, token };
  }

  public static async findByToken(token: string): Promise<User | null> {
    const payload = verifyTokenPayload(token);
    if (!payload || !payload.id) return null;

    const users = await this.readAll();
    const user = users.find((u) => u.id === payload.id);
    if (!user) return null;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      company: user.company,
      role: user.role,
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
    };
  }
}
