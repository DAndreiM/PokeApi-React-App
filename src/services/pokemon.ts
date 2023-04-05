import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {pokemonDetailModel} from '../models/pokemonModel';

type PDATA= {
    results: {name:string, url:string}[];
}

export const pokemonApi = createApi(
    {
        reducerPath: 'pokemonApi',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: 'https://pokeapi.co/api/v2/'
            }
        ),
        endpoints: (builder) => ({
            getPokemonSpeciesInfo: builder.query<pokemonDetailModel, string>({
                query: (name) => `pokemon-species/${name}`
            }),
            getPokemonSpecies: builder.query<PDATA, {offset:number, limit:number}>({
                query: ({offset, limit}) => `pokemon-species?offset=${offset}&limit=${limit}`
            })
        })
    }
);

export const { useGetPokemonSpeciesInfoQuery } = pokemonApi;
export const {useGetPokemonSpeciesQuery} = pokemonApi;

