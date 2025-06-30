import { useEffect, useState } from "react";

 interface Pokemon {
    id: number;
    name: string;
}

function PokemonCard(){

    const[pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect (() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((response) => response.json())
        .then((data)=> setPokemon(data));
    }, []);

    return pokemon.id ? (
        <li className="pokemon-card">
            <h2 className="pokemon-name">{pokemon.name}</h2>
        </li>
        )
    
}

export default PokemonCard;