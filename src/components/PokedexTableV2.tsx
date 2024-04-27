import { api } from "~/utils/api";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

type PokedexTableProps = {
    type: string;
};

type Data = {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}[] | undefined

const PokedexTableV2: React.FC<PokedexTableProps> = ({ type }) => {

    const { data } = api.pokemon.getPokemonByType.useQuery({
        type: type
    })
    return (
        <TableContainer component={Paper} sx={{ marginTop: '40px', marginBottom: '40px' }} >
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Types</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((data) => (
                        <TableRow
                            key={data.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {data.id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <img src={data.sprite} height={'200px'} width={'200px'} />
                            </TableCell>
                            <TableCell align="right">{data.name}</TableCell>
                            <TableCell align="right">{data.types.map((type, i) =>
                                <Typography key={i} variant="body2" gutterBottom>
                                    {type}
                                </Typography>
                            )}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PokedexTableV2;