import React from "react";

const Pokemon = ({ pokeinfo }) => {
  const pokeImage = pokeinfo.sprites.front_default;
  const pokeName = pokeinfo.name;
  //
  const pokeTypes = pokeinfo.types.map((type) => {
    return (
      <div className="typediv">
        <p>{type.type.name}</p>
      </div>
    );
  });
  const primaryType = pokeinfo.types[0].type.name;

  //
  return (
    <>
      <div className="pokecard" id={primaryType}>
        <img src={pokeImage} alt={pokeName} />
        <h2>{pokeName}</h2>
        <div className="underline"></div>
        <div className="pokemon-information">{pokeTypes}</div>
      </div>
    </>
  );
};

export default Pokemon;
