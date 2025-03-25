import { httpClient } from "./httpClient";

import { UserDTO } from "shared-lib";

class AuthService {
  async getCurrentUser(): Promise<UserDTO | null> {
    try {
      return await httpClient.get<UserDTO>("/auth/me");
    } catch (error) {
      return null;
    }
  }

  async login(credentials: { email: string, password: string }): Promise<UserDTO> {
    return await httpClient.post<UserDTO>("/auth/login", credentials);
  }

  async signup(credentials: {email: string, password: string, name: string}): Promise<UserDTO> {
    return await httpClient.post<UserDTO>("/auth/signup", credentials);
  }

  async logout(): Promise<void> {
    await httpClient.post("/auth/logout");
  }
}

export const authService = new AuthService();
