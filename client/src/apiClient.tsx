import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

interface AuthResponse {
  access_token: string;
  token_type: string;
}

interface RegisterResponse {
  message: string;
}

export const registerUser = (name: string, email: string, password: string) =>
  api.post<RegisterResponse>('/register', { name, email, password });

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/token', new URLSearchParams({
    email,
    password,
  }));
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
  }
  return response.data;
};

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
