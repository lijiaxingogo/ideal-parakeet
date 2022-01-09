import React, { useState, useContext } from 'react';
import useStyle from './style';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import axios from 'axios';
import { PokemonContext } from '../../context/pokemonContext';
const Search = () => {
    const classes = useStyle();
    const [searchValue, setSearchValue] = useState('');
    const { addPokemonToList } = useContext(PokemonContext);

    const onChange = (event) => {
        setSearchValue(event.target.value);
    };
    const onSubmit = async (pokemon = searchValue) => {
        const data = await axios.get(
            `http://localhost:4000/pokemon/${pokemon}`,
            {
                headers: { 'Access-Control-Allow-Origin': '*' },
            }
        );
        // grab the data from backend API and push it to global pokemon context
        addPokemonToList(data.data);
    };
    return (
        <div className={classes.Container}>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 400,
                    maxHeight: 50,
                }}
            >
                <IconButton sx={{ p: '10px' }}>
                    <CatchingPokemonIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Pokemon"
                    inputProps={{ 'aria-label': 'search pokemon' }}
                    value={searchValue}
                    onChange={onChange}
                />
                <IconButton
                    type="submit"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={(e) => {
                        e.preventDefault();
                        onSubmit();
                        setSearchValue('');
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
};
export default Search;
