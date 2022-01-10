import React, { useState, useContext } from 'react';
import useStyle from './style';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import axios from 'axios';
import { PokemonContext } from '../../context/pokemonContext';
import { Alert, AlertTitle } from '@material-ui/lab';
const Search = () => {
    const classes = useStyle();
    const [searchValue, setSearchValue] = useState('');
    const { addPokemonToList, pokemonList } = useContext(PokemonContext);
    const [error, setError] = useState(false);
    console.log('what is pokemonList', pokemonList);
    const onChange = (event) => {
        setSearchValue(event.target.value);
        setError(false);
    };
    const onSubmit = async (pokemon = searchValue) => {
        try {
            const data = await axios.get(
                `http://localhost:4000/pokemon/${pokemon}`,
                {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                }
            );

            data.data.id = pokemonList.length + 1;
            addPokemonToList(data.data);
        } catch (err) {
            setError(true);
        }

        // grab the data from backend API and push it to global pokemon context
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
            {error && (
                <div className={classes.ErrorMsg}>
                    <Alert
                        severity="error"
                        onClose={() => {
                            setError(false);
                        }}
                    >
                        Couldn't find the pokemon —{' '}
                        <strong>Try it again!</strong>
                    </Alert>
                </div>
            )}
        </div>
    );
};
export default Search;
