import { getUserById } from "@/requests";
import { User } from "@repo/types";
import { Card, Descriptions, Spin } from "antd";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserPage: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const id = router.query.id as string;

  useEffect(() => {
    if (id) {
      getUserById(parseInt(id)).then(setUser)
    }
  }, [id])

  if (!user) {
    return <Spin />;
  }

  return (
    <Card>
      <Descriptions title="User info">
        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
        <Descriptions.Item label="Street">{user.address.streetName}</Descriptions.Item>
        <Descriptions.Item label="City">{user.address.city}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

export default UserPage;
