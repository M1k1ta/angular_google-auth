const BASE_URL = 'https://google-auth-service.onrender.com';
//http://localhost:5000
//https://google-auth-service.onrender.com
type RequestMethod = 'GET' | 'POST' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: unknown = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: unknown) => request<T>(url, 'POST', data),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
};
