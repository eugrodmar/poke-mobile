 export interface IPokemon {
    id: number;
    name: string;
    url: string;
    sprites:{ master: {sprites:{pokemon: string;};};};
    
}