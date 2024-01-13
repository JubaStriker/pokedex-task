import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const PokedexTable = () => {

    const [name, setName] = useState('');

    useEffect(() => {
        const pokemons = name.split(' ')
        console.log(pokemons)
    }, [name])
    return (
        <>
            <TextField
                type="text" name='name' onChange={(e) => setName(e.target.value)}
                label="Pokemon name" variant="filled" color='primary' fullWidth />
        </>
    );

};

export default PokedexTable;

