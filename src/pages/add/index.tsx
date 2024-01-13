/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Head from "next/head";

import { api } from "~/utils/api";
import styles from "../index.module.css";
import { Button, ButtonGroup } from "@mui/material";
import { type TPokemon } from "~/server/api/routers/pokemon";
import Swal from "sweetalert2";
import { type FormEvent, useState } from "react";
import Link from 'next/link';


export default function Add() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newPokemon: TPokemon = {
            name: name,
            types: [type],
            sprite: image
        }
        mutate(newPokemon)
        setName('')
        setType('')
        setImage('')
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
            console.log(err);
        }
    })

    return (
        <>
            <Head>
                <title>Pokedex - Add</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/pokedex-icon.jpg" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Add Pokemon</h1>
                <ButtonGroup
                    sx={{
                        marginTop: 4
                    }}
                    variant="text" aria-label="text button group">
                    <Link href={'/all'}>
                        <Button >Show All Pokemons</Button>
                    </Link>
                    <Link href={'/'}>
                        <Button >Home</Button>
                    </Link>
                </ButtonGroup>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2} sx={{ width: 300 }}>
                            <TextField
                                required
                                type="text" name='name' onChange={(e) => setName(e.target.value)}
                                id="outlined-basic" label="Pokemon name" variant="outlined" color='primary'
                                value={name} />
                            <TextField
                                required
                                type="text" name='type' onChange={(e) => setType(e.target.value)}
                                id="outlined-basic" label="Pokemon type" variant="outlined" color='primary'
                                value={type} />
                            <TextField
                                required
                                type="text" name='image' onChange={(e) => setImage(e.target.value)}
                                id="outlined-basic" label="Pokemon image" variant="outlined" color='primary'
                                value={image}
                                helperText='Please provide photo URL only' />
                        </Stack>

                        <Button
                            sx={{
                                marginTop: 2
                            }}
                            variant="contained" color="primary"
                            type="submit">Add</Button>
                    </form>
                </div>


            </main>
        </>
    );
}