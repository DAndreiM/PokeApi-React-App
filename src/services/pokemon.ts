import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import pokemonModel from '../models/pokemonModel';

export const pokemonApi = createApi(
    {
        reducerPath: 'pokemonApi',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: 'https://pokeapi.co/api/v2/'
            }
        ),
        endpoints: (builder) => ({
            getPokemonSpeciesInfo: builder.query<pokemonModel, string>({
                query: (name) => `pokemon-species/${name}`
            })
        })
    }
);

export const { useGetPokemonSpeciesInfoQuery } = pokemonApi;

