import Display from './components/Display/Display';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { PokemonProvider } from './context/pokemonContext';
const App = () => {
    return (
        <div className="App">
            <PokemonProvider>
                <Header />
                <Search />
                <Display />
            </PokemonProvider>
        </div>
    );
};

export default App;
