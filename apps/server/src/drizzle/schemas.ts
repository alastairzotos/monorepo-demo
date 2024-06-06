import { Address, User } from "@repo/types";
import { InferSelectModel } from "drizzle-orm";
import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

type DoesExtend<T, U extends T> = U;

export const UsersTable = pgTable("user", {
  id: serial("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer('age').notNull(),
  address: json('address').$type<Address>().notNull(),
});

export type UserSchema = DoesExtend<User, InferSelectModel<typeof UsersTable>>;
