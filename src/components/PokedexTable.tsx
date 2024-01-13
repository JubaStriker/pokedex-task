/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, TextField } from "@mui/material";
import React, { type FormEvent, useState } from "react";
import PokedexTableData from "./PokedexTableData";

const PokedexTable = () => {

    let pokemons: string[] = [];
    const [name, setName] = useState('');
    const [showPokedex, setShowPokedex] = useState(false);
    const [data, setData] = useState<string[]>([]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        pokemons = name.split(' ')
        setShowPokedex(true);
        setData(pokemons)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text" name='name' onChange={(e) => setName(e.target.value)}
                    label="Pokemon names" variant="filled" color='primary' fullWidth
                    helperText="i.e. Pokemon Bulbasaur Vulpix" />

                <Button
                    sx={{
                        marginTop: 2
                    }}
                    variant="contained" color="primary"
                    type="submit">Search</Button>

            </form>

            {showPokedex && <PokedexTableData pokemons={data} />}

        </>

    );

};

export default PokedexTable;

