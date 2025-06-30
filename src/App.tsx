import './App.css';
import HeaderComponent from './components/HeaderComponents';
import ButtonNext from './components/ButtonNext';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <main>
      <PokemonList></PokemonList>
    </main>
    <ButtonNext></ButtonNext>
    </>
  );
}

export default App;
