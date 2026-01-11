import Head from "next/head";
import { Inter } from "next/font/google";
import { Tabs } from 'antd';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>payabl. - Code assignment</title>
        <meta name="description" content="An amazing integration!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
      </main>
    </>
  );
}
