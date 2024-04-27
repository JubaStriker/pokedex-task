// components/PokemonTypeSelection.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

type PokemonTypeSelectionProps = {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
    selectedType,
    selectType,
}) => {
    const types = ["fire", "water", "grass", "poison", "normal", "flying", "bug", "ground", "electric"];


    const handleChange = (event: SelectChangeEvent) => {
        selectType(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }} style={{ marginTop: '40px' }}>
            <h3>Find Pokemon by type</h3>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedType}
                    label="Type"
                    onChange={handleChange}
                >
                    {types.map((type, index) => <MenuItem key={index} value={type}>{type}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default PokemonTypeSelection;