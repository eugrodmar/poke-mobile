import { useEffect, useState } from "react";

function PokemonCard(){

    const[pokemon, setPokemon] = useState<any>({});

    useEffect (() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((response) => response.json())
        .then((data)=> setPokemon(data))
    }, [])

    return(
        
        <li className="pokemon-card">
            <h2 className="pokemon-name">{pokemon.name}</h2>
        </li>
    )
}

export default PokemonCard;