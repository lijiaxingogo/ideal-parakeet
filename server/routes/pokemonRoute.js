const express = require('express');
const router = express.Router();
const pokemon = require('../controllers/pokemonController');
router.get('/:pokemon_name', pokemon.getPokemon, (req, res) => {
    res.status(200).send(res.locals.data);
});

module.exports = router;
