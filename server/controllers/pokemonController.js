const fetch = require('node-fetch');
const pokemon = {};
pokemon.getPokemon = async (req, res, next) => {
    const { pokemon_name } = req.params;
    const base_URI = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;
    try {
        const response = await fetch(base_URI);
        let data = await response.json();
        data = {
            index: data.id,
            name: pokemon_name,
            type: data.types.map((a) => a.type.name),
            pic: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
        };
        res.locals.data = data;
        return next();
    } catch (err) {
        next({
            log: `pokemonController.getPokemon: ERROR: ${err}`,
            message: {
                err: 'Error: Bad fetch pokemon request. Check server logs fo details.',
            },
        });
    }
};
module.exports = pokemon;
