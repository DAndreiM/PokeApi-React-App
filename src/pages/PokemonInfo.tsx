import { useLoaderData, Await, json, defer } from "react-router";
import { Suspense } from "react";
import PokemonDetails from "../components/pokemon/PokemonDetails";
import { LoaderFunction } from 'react-router-dom';
import pokemonModel from "../models/pokemonModel";

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<ReturnType<TLoaderFn>> extends Response | infer D
	? D
	: never;

const PokemonInfo = () => {
  const { data } = useLoaderData() as LoaderData<typeof loader>;
  return (
    <Suspense
      fallback={
        <p style={{ textAlign: "center", color: "white" }}>Loading data...</p>
      }
    >
      <Await resolve={data}>
        {(pokemonData) => <PokemonDetails pokemon={pokemonData} />}
      </Await>
    </Suspense>
  );
};

async function loadData(pokemonIdentifier: string) {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonIdentifier
  );

  if (!response.ok) {
    throw json(
      { message: "Couldn't fetch data for the specified pokmeon" },
      { status: 404 }
    );
  }

  const data = await response.json();
  console.log(data);
  let moves: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    moves.push(<li key={Math.random()*100}>{data.moves[i].move.name.toUpperCase()}</li>);
  }

  const pokemonData: pokemonModel = {
    id: data.id,
    url: 'none',
    name: data.name.toUpperCase(),
    height: data.height,
    weight: data.weight,
    experience: data["base_experience"],
    abilities: [...moves],
    image: data.sprites.front_shiny,
  };
  return pokemonData;
}

export async function loader({ request, params }: {request: any, params: any}) {
  const pokemonIdentifier = params.pokemonID;

  return defer({
    data: loadData(pokemonIdentifier),
  });
}

export default PokemonInfo;
