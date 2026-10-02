export type UserRole = "developer" | "brokerage" | "sales_closer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: UserRole;
  createdAt: string;
  lastLoginAt: string;
}

export interface StoredUser extends User {
  passwordHash: string;
  salt: string;
}

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
  company?: string;
  role?: UserRole;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}
