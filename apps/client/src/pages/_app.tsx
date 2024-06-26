import { Layout, Menu, Typography } from "antd";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

const { Header, Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Monorepo Demo</title>
      </Head>
      <Layout>
        <Header>
          <Link href="/">
            <Typography.Text style={{ color: 'white' }}>Monorepo Demo</Typography.Text>
          </Link>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: 8 }}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </>
  )
}
