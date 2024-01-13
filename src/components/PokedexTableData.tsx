/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { api } from "~/utils/api";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PokedexTableData = (props: { pokemons: string[] }) => {
    const pokemons = props.pokemons;
    const { data } = api.pokemon.getPokemonByArray.useQuery({
        filter: pokemons
    })

    return (
        <div>
            {data?.map((e, i) =>
                <Card
                    key={i}
                    sx={{
                        display: 'flex',
                        gap: 5,
                        padding: 4,
                        mt: 2
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {e.name}
                            </Typography>
                            {e.types.map((type, i) =>
                                <Typography
                                    key={i}
                                    color="text.secondary" component="div">
                                    {type}
                                </Typography>
                            )}
                            <Typography component="div">
                                Pokemon ID : {e.id}
                            </Typography>
                        </CardContent>

                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={e.sprite}
                        alt={e.name}
                    />
                </Card>

            )}
        </div>
    );
};

export default PokedexTableData;