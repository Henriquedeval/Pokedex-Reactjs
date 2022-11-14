import React, { useState } from "react";

const Navbar = ({ onSearchHandler }) => {
  const logo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const [search, setSearch] = useState();
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      return onSearchHandler(undefined);
    }
  };

  const onClickHandler = () => {
    onSearchHandler(search);
  };

  return (
    <>
      <div className="navbar">
        <img src={logo} />

        <input
          type="text"
          placeholder="Buscar Pokemon"
          onChange={onChangeHandler}
        />

        <button onClick={onClickHandler}>Buscar</button>
      </div>
    </>
  );
};

export default Navbar;
