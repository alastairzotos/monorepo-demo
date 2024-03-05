import express from 'express';
import cors from 'cors';
import { UserSchema } from '@repo/types';

import { db } from './db';

const app = express();
app.use(cors())
app.use(express.json());

app.post('/users', (req, res) => {
  const user = UserSchema.parse(req.body);

  const record = db.addUser(user);

  res.json(record);
})

app.get('/users/:id', (req, res) => {
  const user = db.getUserById(req.params.id);

  if (!user) {
    return res.sendStatus(404);
  }

  res.json(user);
})

app.get('/users', (_, res) => {
  res.json(db.getUsers());
})

app.listen(3001, () => console.log('http://localhost:3001'));
