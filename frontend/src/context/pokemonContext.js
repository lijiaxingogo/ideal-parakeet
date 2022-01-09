import React, { createContext, useReducer } from 'react';
import pokemonReducer from './pokemonReducer';
const initialState = {
    pokemonList: [],
};

export const PokemonContext = createContext(initialState);
export const PokemonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    function addPokemonToList(pokemon) {
        dispatch({
            type: 'ADD_POKEMON',
            payload: pokemon,
        });
    }

    return (
        <PokemonContext.Provider
            value={{ pokemonList: state.pokemonList, addPokemonToList }}
        >
            {children}
        </PokemonContext.Provider>
    );
};
