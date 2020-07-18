import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import "./PokeDanceParty.scss";

// for the pokemon section of the API docs check out:
//   https://pokeapi.co/docs/v2#pokemon
// for information on how the query parameters (/?limit=30) were written:
//   https://pokeapi.co/docs/v2#resource-listspagination-section

const API_URL_ROOT = "https://pokeapi.co/api/v2/pokemon/";
const NUMBER_OF_POKEMON = 60;
const POKEMON_ON_FIELD = 30;

const PokeDanceParty = () => {
  // creating state to hold the API results
  const [pokemonList, setPokemonList] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [randomizedList, setRandomizedList] = useState([]);

  const fetchRandoPokeInfo = async () => {
    const resp = await fetch(
      pokemonList[Math.floor(Math.random() * Math.floor(NUMBER_OF_POKEMON))].url
    );
    const json = await resp.json();
    return json;
  };

  const generateRandomPokemon = async num => {
    const list = [];
    for (let i = 0; i < num; i++) {
      list.push(await fetchRandoPokeInfo());
    }
    setHasFetched(true);
    setRandomizedList(list);
  };

  const makeAPICall = () => {
    fetch(API_URL_ROOT + `?limit=${NUMBER_OF_POKEMON}`) // using JS fetch with our Pokemon API URL
      .then(resp => resp.json()) // take the API response and turn it into JSON
      .then(json => {
        setPokemonList(json.results); // grab the results array from it and set state
      });
  };

  // useEffect to handle API call side effects
  useEffect(() => {
    !hasFetched && makeAPICall();
  }, [hasFetched, pokemonList]);

  // -------------- RENDER ------------------
  return (
    <div className="background">
      <button onClick={() => generateRandomPokemon(POKEMON_ON_FIELD)}>
        Generate Pokefarm
      </button>

      <h1> GOTTA CLICK EM' ALL</h1>
      {hasFetched ? (
        randomizedList.map(pokemon => {
          return (
            <Pokemon
              key={Math.random()}
              sprite={pokemon.sprites.front_default}
            />
          );
        })
      ) : (
        <h1> READY TO BRING IN THE POKEMON</h1>
      )}
    </div>
  );
};

export default PokeDanceParty;
