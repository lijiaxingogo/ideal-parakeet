import React from 'react';

const pokemonReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POKEMON':
            return {
                pokemonList: [action.payload, ...state.pokemonList],
            };
        default:
            return state;
    }
};

export default pokemonReducer;
