import React, { useState, useContext } from 'react';
import { PokemonContext } from '../../context/pokemonContext';

const Display = () => {
    const { pokemonList } = useContext(PokemonContext);
    console.log(pokemonList);
    return <div>this is display</div>;
};
export default Display;
