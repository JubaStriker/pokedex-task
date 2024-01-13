/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "~/utils/api";
import styles from "../pages/index.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const PokemonRow = (props: { name: string }) => {
    const { name } = props;
    const { data } = api.pokemon.getPokemon.useQuery({
        name: name
    })

    return (
        <div>
            {data?.length === 0 ?
                <Card
                    sx={{
                        display: 'flex',
                        gap: 5,
                        padding: 4,
                        mt: 2,
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: 'transform 0.2s ease',
                        }
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                No Match Found
                            </Typography>
                        </CardContent>

                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
                        alt='Not Found'
                    />
                </Card> : ''}
            {data?.map(e =>
                <Card
                    key={e.id}
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

export default PokemonRow;
