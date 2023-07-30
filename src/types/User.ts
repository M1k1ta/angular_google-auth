export interface User {
  name: string;
  email: string;
  picture: string;
  errors?: {
    email?: string;
  };
  status?: string;
}
