import "./styles.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  fetchPokemons,
  getPokemonUrlResponse,
  searchPokemon
} from "./components/api";
import Pokedex from "./components/Pokedex";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const itemPerPage = 20;

  const [notFound, setNotFound] = useState(false);

  const getPokemonsUrl = async () => {
    try {
      setLoading(true);
      const data = await fetchPokemons(itemPerPage, itemPerPage * page);
      const promises = data.results.map(async (pokedata) => {
        return await getPokemonUrlResponse(pokedata.url);
      });
      const pokeData = await Promise.all(promises);
      setPokemons(pokeData);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemPerPage));
    } catch (error) {
      console.log("error:", error);
    }
  };

  const onSearchHandler = async (pokeinput) => {
    if (!pokeinput) {
      return getPokemonsUrl();
    }

    setLoading(true);
    setNotFound(false);
    const pokeResponse = await searchPokemon(pokeinput);

    if (!pokeResponse) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemons([pokeResponse]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPokemonsUrl();
  }, [page]);

  return (
    <>
      <Navbar onSearchHandler={onSearchHandler} />
      {notFound ? (
        <div className="notfound">
          <h1>Pokemon Não existe</h1>
        </div>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={1+page}
          setPage={setPage}
          totalPages={totalPages}
          setTotalPages={setTotalPages}
        />
      )}
    </>
  );
};

export default App;
