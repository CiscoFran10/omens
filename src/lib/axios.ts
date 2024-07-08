import axios from 'axios';
import { env } from '@/env';

const BASE_URL = env.NEXT_PUBLIC_API_URL ||'https://api.omens.com.br/react-test'

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
