import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {pokemonDetailModel} from '../models/pokemonModel';
import {berryDetail, berryFirmness, berryFirmnessDetail, berryFlavor, berryFlavorsDetail} from '../models/berriesModel';

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
            getBerryDetail: builder.query<berryDetail, string>({
                query: (name) =>`berry/${name}`
            }),
            getBerryFirmness: builder.query<berryFirmness, null>({
                query: () =>`berry-firmness`
            }),
            getBerryFirmnessDetails: builder.query<berryFirmnessDetail, string>({
                query: (name) =>`berry-firmness/${name}`
            }),
            getBerryFlavor: builder.query<berryFlavor, null>({
                query: () =>`berry-flavor`
            }),
            getBerryFlavorDetails: builder.query<berryFlavorsDetail, string>({
                query: (name) =>`berry-flavor/${name}`
            }),
        })
    }
);

export const { useGetPokemonSpeciesInfoQuery } = pokemonApi;
export const { useGetBerryDetailQuery } = pokemonApi;
export const { useGetBerryFirmnessQuery } = pokemonApi;
export const { useGetBerryFirmnessDetailsQuery } = pokemonApi;
export const { useGetBerryFlavorQuery } = pokemonApi;
export const { useGetBerryFlavorDetailsQuery } = pokemonApi;

