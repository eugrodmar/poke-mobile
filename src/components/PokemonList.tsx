import { useEffect, useState } from "react";
import PokemonBase from "./PokemonBase";
import { IPokemon } from "../tipos";

function PokemonList({ offset, limit }: {offset?: number; limit?: number}){

    const [pkmArr, setPkmArr] = useState<IPokemon[]>([]);
    //Aquí se almacena la petición de los Pokemons que hacemos a la API
    //El useState guarda dentro del componente una información que puede cambiar
    //pkmArr contiene la lista actual de Pokemons
    //setPkmArr sirve para actualizar la lista a través del useEffect
    //useState<Poke[]>([]) indica el estado que es un array de objetos tipo IPokemon que empieza vacio
   

    useEffect (() => {
            fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            //En esta llamada a la API a través de la petición HTTP GET entre {} elijo dónde empieza y dón acaba la cantidad de 
            //Pokemons que quiero que se vean.
            .then((response) => response.json())
            .then((data)=> setPkmArr(data.results)) 
            //Hay que colocar el .results porque la respuesta que da la API es un objeto y no un array como tal
        }, [offset, limit]);
        //Con esta llamada a la API he pedido un número X de la lista de Pokemons que debo guardarla 

    return(
        <ul className ="pokemon-list">
            {pkmArr.map((pokemon: IPokemon, id) => (
        <PokemonBase key={id} pokemon={pokemon}></PokemonBase>
        ))}
        </ul>
        )
    
    }
export default PokemonList;