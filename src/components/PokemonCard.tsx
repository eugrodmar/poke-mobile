import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPokemon } from "../tipos";
import PokemonBase from "./PokemonBase";


function PokemonCard(){

    const[pokemon, setPokemon] = useState<IPokemon | null>(null);
    const[searchParams] = useSearchParams();
    const id = searchParams.get('id') ?? '1';
    //useSearchParams() es mejor porque en caso de que la URL cambie se puede volver renderizar 
    //ya que lee a partir de la ? (es decir, el queryParam) por lo que da igual la url


    useEffect (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data)=> setPokemon(data))
    }, [id]); 
    //Se usa el id como dependencia para que se monte el componente cada vez que cambia el valor del id.
    //Si no se pusiera el id entre corchetes como dependencia el useEffect no sabe que el efecto depende de ese id

    return pokemon?.id ? (
        //La interrogación es para comprobar si el ID del pokemon existe. 
        //En caso de que no exista nos daría nullo como se especifica al final del return
        <PokemonBase pokemon={pokemon} />
        ) : null;
}

export default PokemonCard;