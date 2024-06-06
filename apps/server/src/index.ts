import express from 'express';
import cors from 'cors';
import { UserSchema } from '@repo/types';

import { db } from './db';
import { UsersTable } from './drizzle/schemas';

const app = express();
app.use(cors())
app.use(express.json());

app.post('/users', async (req, res) => {
  const user = UserSchema.parse(req.body);

  const record = await db.insert(UsersTable).values(user).returning();

  res.json(record);
})

app.get('/users/:id', async (req, res) => {
  const user = await db.query.UsersTable.findFirst({
    where: (t, { eq }) => eq(t.id, parseInt(req.params.id))
  })

  if (!user) {
    return res.sendStatus(404);
  }

  res.json(user);
})

app.get('/users', async (_, res) => {
  res.json(await db.query.UsersTable.findMany());
})

app.listen(3001, () => console.log('http://localhost:3001'));
