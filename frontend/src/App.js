import Display from './components/Display/Display';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Display />
        </div>
    );
};

export default App;
