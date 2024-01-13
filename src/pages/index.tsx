import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import styles from "./index.module.css";
import { Button } from "@mui/material";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "Hi", test: "New test field" });
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Create <span className={styles.pinkSpan}>T3</span> App
          </h1>
          <Button variant="contained">Contained</Button>
          <p className={styles.showcaseText}>
            {/* {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            {hello.data ? hello.data.test : "Loading tRPC query..."} */}
            {hello.data?.test}
          </p>
        </div>
      </main>
    </>
  );
}
