import{ IPokemon } from '../tipos';

//Es el componente hijo

function PokemonBase({pokemon}: {pokemon: IPokemon}){ //Se define un componente funcional que recibe una propiedad llamada pokemon, cuyo tipo es IPokemon. 
    
   
    
    return(
        <li className='pokemon-base'>
            <h2>{pokemon.id}</h2>
            <h2>{pokemon.name}</h2>
        </li>
        //Se renderiza un elemento que muestra el nombre del Pokémon pasado como prop
    );
}

export default PokemonBase;