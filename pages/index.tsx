import Head from "next/head";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Craffey</title>
        <meta name="description" content="A portfolio site for Jacob Craffey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
      </main>
    </>
  );
}
