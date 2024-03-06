import type { User } from '@repo/types';

export class Database {
  users: Record<string, User> = {};

  addUser(user: User): User {
    const id = Object.keys(this.users).length + 1;

    this.users[id] = { ...user, id };

    return this.users[id];
  }

  getUsers() {
    return Object.values(this.users);
  }

  getUserById(id: string) {
    return this.users[id];
  }
}

export const db = new Database();
