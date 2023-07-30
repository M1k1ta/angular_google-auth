export type AuthResponse = {
  errors?: {
    name?: string;
    email?: string;
    password?: string;
  };
  accessToken: string,
};
