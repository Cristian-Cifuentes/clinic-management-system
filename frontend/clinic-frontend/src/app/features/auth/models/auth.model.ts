export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  // Puedes agregar otros campos que retorne tu backend, por ejemplo:
  // userId: number;
  // roles: string[];
}
