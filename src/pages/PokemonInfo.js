import { useLoaderData, Await, json, defer } from "react-router";
import { Suspense } from "react";
import PokemonDetails from "../components/pokemon/PokemonDetails";

const PokemonInfo = () => {
  const { data } = useLoaderData();
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

async function loadData(pokemonIdentifier) {
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
  let moves = [];

  for (let i = 0; i < 3; i++) {
    moves.push(<li>{data.moves[i].move.name.toUpperCase()}</li>);
  }

  const pokemonData = {
    name: data.name.toUpperCase(),
    height: data.height,
    weight: data.weight,
    experience: data["base_experience"],
    abilities: [...moves],
  };

  return pokemonData;
}

export async function loader({ request, params }) {
  const pokemonIdentifier = params.pokemonID;

  return defer({
    data: loadData(pokemonIdentifier),
  });
}

export default PokemonInfo;
