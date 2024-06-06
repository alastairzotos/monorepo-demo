import React, { useState } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Form, Input, InputNumber, Spin, Typography } from "antd";

import { User, UserSchema } from "@repo/types";
import { createUser } from "@/requests";

const CreateUserPage: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
    mode: 'all'
  })

  const onSubmit = async (data: User) => {
    await createUser(data);
    setSubmitted(true);
  }

  if (submitted) {
    return <Alert type="success" message="Created successfully" />;
  }

  return (
    <>
      <Typography.Title level={4}>Create user</Typography.Title>

      <Form
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <FormItem control={control} name="name" label="Name">
          <Input />
        </FormItem>

        <FormItem control={control} name="age" label="Age">
          <InputNumber />
        </FormItem>

        <FormItem control={control} name="address.streetName" label="Street Name">
          <Input />
        </FormItem>

        <FormItem control={control} name="address.city" label="City">
          <Input />
        </FormItem>

        <Form.Item wrapperCol={{ sm: { span: 16, offset: 8 }}}>
          <Button type="primary" htmlType="submit" disabled={!isValid}>
            {isSubmitting ? <Spin /> : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateUserPage;
