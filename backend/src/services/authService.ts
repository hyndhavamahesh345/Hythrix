import { UserStorage } from "../storage/userStorage";
import { SignUpInput, SignInInput, AuthResponse, User } from "../types/authTypes";

export class AuthService {
  public static async signup(input: SignUpInput): Promise<AuthResponse> {
    if (!input.name || input.name.trim().length < 2) {
      return { success: false, error: "Name must be at least 2 characters long." };
    }

    if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    if (!input.password || input.password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters long." };
    }

    return await UserStorage.register(input);
  }

  public static async signin(input: SignInInput): Promise<AuthResponse> {
    if (!input.email || !input.password) {
      return { success: false, error: "Email and password are required." };
    }

    return await UserStorage.authenticate(input);
  }

  public static async getCurrentUser(token: string): Promise<User | null> {
    if (!token) return null;
    return await UserStorage.findByToken(token);
  }
}
