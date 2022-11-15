import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = ({
  pokemons,
  loading,
  page,
  setPage,
  totalPages,
  setTotalPages
}) => {
  const gotoPrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const gotoNextPage = () => {
    if (page !== totalPages)
      setPage(page + 1);
  };

  return (
    <>
      <div className="pokedex-header">
        <Pagination
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
          page={page}
          totalPages={totalPages}
        />
        {loading ? (
          <div className="loading-content">
            <p> Carregando Pokemons...</p>
          </div>
        ) : (
          <div className="pokedex-grid">
            {pokemons.map((pokeinfo, key) => {
              return <Pokemon key={key} pokeinfo={pokeinfo} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Pokedex;
