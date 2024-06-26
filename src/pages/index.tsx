/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Head from "next/head";
import styles from "./index.module.css";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import PokemonRow from "~/components/PokemonRow";
import Grid from '@mui/material/Grid';
import PokedexTable from '~/components/PokedexTable';
import Link from 'next/link';
import FilterablePokedexTable from '~/components/FilterablePokedexTable';


export default function Home() {
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/pokedex-icon.jpg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Find Your Pokemon</h1>
        <ButtonGroup
          sx={{
            marginTop: 4
          }}
          variant="text" aria-label="text button group">
          <Link href={'/add'}>
            <Button >Add Pokemons</Button>
          </Link>
          <Link href={'/all'}>
            <Button >Show all Pokemons</Button>
          </Link>
        </ButtonGroup>

        <Grid container justifyContent="center" spacing={2} paddingTop={8}>
          <Grid item xs={6} md={5}>
            <Stack spacing={2} sx={{ width: 300 }}>
              <h3>Find with single name</h3>
              <TextField
                type="text" name='name' onChange={(e) => setName(e.target.value)}
                label="Pokemon name" variant="filled" color='primary' fullWidth
                helperText='Case sensitive*' />
            </Stack>
            {name.length > 0 &&
              <PokemonRow name={name} />
            }
          </Grid>
          <Grid item xs={6} md={5}>

            <h3>Find with name of arrays</h3>
            <PokedexTable />
          </Grid>
        </Grid>


        <FilterablePokedexTable />



      </main>
    </>
  );
}