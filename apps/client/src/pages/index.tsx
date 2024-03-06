import { getUsers } from '@/requests';
import { User } from '@repo/types';
import { Button, Card, List, Typography } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, [])

  return (
    <>
      <Typography.Title>Welcome</Typography.Title>

      <Card>
        <List
          dataSource={users}
          renderItem={({ id, name }) => (
            <Link href={`/user/${id}`}>
              <List.Item>{id}: {name}</List.Item>
            </Link>
          )}
        />
      </Card>

      <Link href="/create" passHref>
        <Button>
          Create User
        </Button>
      </Link>
    </>
  );
}
