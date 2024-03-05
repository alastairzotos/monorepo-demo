import { User } from "@repo/types";
import axios from "axios";
// import omit from 'object.omit';

const baseURL = 'http://localhost:3001';

export const createUser = async (data: User) => {
  await axios.post('/users', data, { baseURL });
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('/users', { baseURL });
  return data;
}

export const getUserById = async (id: number): Promise<User> => {
  const { data } = await axios.get(`/users/${id}`, { baseURL });
  return data;
}
