import './App.css';
import HeaderComponent from './components/HeaderComponents';
import PaginationButtons from './components/PaginationButtons';
import PokemonList from './components/PokemonList';
import { useState } from 'react';
import PokemonListCopy from './components/PokemonList copy';



function App() {

  //El número de Pokemons a mostrar en cada renderizado se aplica en el componente app que es el que agrupa a los demás componentes

const [offset, setOffset] = useState<number>(0);
const limit = 10;


  return (
    <>
    <HeaderComponent></HeaderComponent>
    <main>
      <PokemonList offset={offset} limit={limit}></PokemonList>
    </main>
    <PaginationButtons offset={offset} limit={limit}></PaginationButtons>
    
    </>
  );
}

export default App;
