import { decodeJwtResponse } from "./decodeJWT";

export const getAuthUser = () => {
  const token = localStorage.getItem('token');
  if (token === null) {
    return null;
  }

  return decodeJwtResponse(token);
}
