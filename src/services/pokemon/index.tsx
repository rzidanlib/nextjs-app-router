export const getData = async () => {
  const res = await fetch(process.env.POKE_API_URL as string, {
    cache: "no-store",
  });
  const data = await res.json();
  const pokemons = data.results;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const pokemonData = await Promise.all(
    pokemons.map(async (pokemon: any) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
      };
    })
  );

  return pokemonData;
};

export const getDetailPokemon = async (id: string) => {
  const response = await fetch(`${process.env.POKE_API_URL}/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();

  const pokemonData: any = {
    id: data.id,
    name: data.name,
    weight: data.weight,
    image: data.sprites.front_default,
    abilities: data.abilities.map((ability: any) => ability.ability.name),
    types: data.types.map((type: any) => type.type.name),
  };

  return pokemonData;
};
