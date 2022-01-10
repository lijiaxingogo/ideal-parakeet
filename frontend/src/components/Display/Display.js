import React, { useState, useContext } from 'react';
import { PokemonContext } from '../../context/pokemonContext';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Divider } from '@material-ui/core';
import useStyle from './style';
const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Name', width: 130 },
    {
        field: 'pic',
        headerName: 'Image',
        width: 170,
        renderCell: (params) => <img src={params.value} />,
    },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'index', headerName: 'Pokedex', width: 110 },
    {
        field: 'hp',
        headerName: 'HP',
        type: 'number',
        width: 115,
    },
    {
        field: 'attack',
        headerName: 'Attack',
        type: 'number',
        width: 115,
    },
    {
        field: 'defense',
        headerName: 'Defense',
        type: 'number',
        width: 115,
    },
];
const Display = () => {
    const { pokemonList } = useContext(PokemonContext);
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Typography variant="h5">Search Records</Typography>
            <Divider />
            <div className={classes.displayBoard}>
                <DataGrid
                    rows={pokemonList}
                    rowHeight={70}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>
    );
};
export default Display;
