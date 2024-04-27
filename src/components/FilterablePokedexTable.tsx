// components/FilterablePokedexTable.tsx
import React, { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTableV2 from "./PokedexTableV2";

const FilterablePokedexTable = () => {
    const [selectedType, setSelectedType] = useState<string | undefined>(
        undefined
    );

    const selectType = (type: string | undefined) => {
        setSelectedType(type);
    };

    return (
        <div>
            <PokemonTypeSelection
                selectedType={selectedType}
                selectType={selectType}
            />
            {selectedType && <PokedexTableV2 type={selectedType} />}
        </div>
    );
};

export default FilterablePokedexTable;