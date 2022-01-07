const pokemon = {};
pokemon.getPokemon = (req, res, next) => {
    const { pokemon_name } = req.params;
    res.locals.data = pokemon_name;
    return next();
};
module.exports = pokemon;
