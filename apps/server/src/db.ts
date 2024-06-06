import { environment } from './environment';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './drizzle/schemas';

const client = postgres(environment.dbConnectionString);

export const db = drizzle(client, {
  schema,
  logger: false,
});
