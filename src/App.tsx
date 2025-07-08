import './App.css';
import HeaderComponent from './components/HeaderComponents';
import Button from './components/Button';
import PokemonList from './components/PokemonList';
import { useState } from 'react';
import ButtPrincipal from './components/ButtPincipal';


function App() {

  //El número de Pokemons a mostrar en cada renderizado se aplica en el componente app que es el que agrupa a los demás componentes

const [offset, setOffset] = useState<number>(0);
const limit = 10;
const [page, setPage] = useState<number>(1);

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <main>
      <PokemonList offset={offset} limit={limit}></PokemonList>
    </main>
    <Button offset={offset} limit={limit} setOffset={setOffset} page={page} setPage={setPage}></Button>
    <ButtPrincipal page={page} setOffset={setOffset} setPage={setPage}></ButtPrincipal>
    </>
  );
}

export default App;
