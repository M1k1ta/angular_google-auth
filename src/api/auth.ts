import { AuthResponse } from "src/types/AuthResponse";
import { client } from "src/utils/fetchClient";

export const googleSignIn = (credential: any) => {
  return client.post<any>(
    '/google-auth',
    { credential },
  );
};

export const register = (name: string, email: string, password: string) => {
  return client.post<AuthResponse>(
    '/registration',
    { name, email, password },
  );
};

export const login = (email: string, password: string) => {
  return client.post<AuthResponse>(
    '/login',
    { email, password },
  );
};
