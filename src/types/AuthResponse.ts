export type AuthResponse = {
  errors?: undefined;
  message?: string,
  user?: {
    userName: string,
    email: string,
    password:string,
  }
  accessToken: string,
  activationToken?: string,
};
