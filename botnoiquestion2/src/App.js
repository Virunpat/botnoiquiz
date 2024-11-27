import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemonData = async () => {
    const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";
    setLoading(true);
    setPokemonData([]);

    try {
      const response = await fetch(pokemonListUrl);
      if (!response.ok) throw new Error("Failed to fetch Pokémon list.");
      const data = await response.json();
      const pokemonList = data.results;

      const pokemonDetails = await Promise.all(
        pokemonList.map(async (pokemon) => {
          try {
            const detailResponse = await fetch(pokemon.url);
            if (!detailResponse.ok)
              throw new Error(`Failed to fetch details for ${pokemon.name}.`);
            const detailData = await detailResponse.json();

            const types = detailData.types.map((type) => type.type.name);
            const type1 = types[0] || null;
            const type2 = types[1] || null;

            const stats = detailData.stats.reduce((acc, stat) => {
              acc[stat.stat.name] = stat.base_stat;
              return acc;
            }, {});

            const imageUrl = detailData.sprites.front_default;

            return {
              name: detailData.name,
              type1,
              type2,
              base_stats: stats,
              imageUrl,
            };
          } catch (error) {
            console.error(error.message);
            return null;
          }
        })
      );

      const validPokemonDetails = pokemonDetails.filter((pokemon) => pokemon !== null);

      setPokemonData(validPokemonDetails);
    } catch (error) {
      console.error("An error occurred while fetching Pokémon data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>API Pokemon</h1>
        <button onClick={fetchPokemonData}>
          {"Get pokemon dex"}
        </button>
      </div>
      <div className="pokemon-list">
        {pokemonData.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <div className="image-container">
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                className="pokemon-image"
              />
            </div>
            <p><strong>Name: </strong>{pokemon.name.toUpperCase()}</p>
            <p><strong>Type 1:</strong> {pokemon.type1}</p>
            {pokemon.type2 && <p><strong>Type 2:</strong> {pokemon.type2}</p>}
            <p><strong>Base Stats:</strong></p>
            <ul>
              {Object.entries(pokemon.base_stats).map(([stat, value]) => (
                <li key={stat}>{stat} = {value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;