/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";

import { api } from "~/utils/api";
import styles from "./index.module.css";
import { Button } from "@mui/material";
import { type TPokemon } from "~/server/api/routers/pokemon";
import Swal from "sweetalert2";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "Hi", test: "New test field" });
  const { data, isLoading } = api.pokemon.getPokemon.useQuery({
    name: "Pickachu"
  })

  console.log(data, isLoading)

  const handleSubmit = () => {
    const newPokemon: TPokemon = {
      name: "Pickachu",
      types: ["electric"],
      sprite: "https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg/revision/latest?cb=20140209205851"
    }
    mutate(newPokemon)
  }

  const { mutate } = api.pokemon.createPokemon.useMutation({
    onSuccess: (data) => {
      // mutation succeeded 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} added successfully`,
        showConfirmButton: false,
        timer: 1500
      });
      console.log(data);
    },
    onError: (err) => {
      // mutation failed
      console.log("Mutation failed ")
      console.log(err);
    }
  })

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/pokedex-icon.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Create <span className={styles.pinkSpan}>T3</span> App
          </h1>
          <Button variant="contained" onClick={handleSubmit}>New Pokemon</Button>
          <p className={styles.showcaseText}>
            {hello.data?.test}
          </p>
        </div>
      </main>
    </>
  );
}
