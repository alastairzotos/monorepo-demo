import { defineConfig } from 'drizzle-kit';
import { environment } from './src/environment';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: environment.dbConnectionString,
  },
  schema: './src/drizzle/schemas.ts',
  out: './src/drizzle/migrations',
  verbose: true,
  strict: true,
});
