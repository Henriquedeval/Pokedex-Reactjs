import React from "react";

const Pagination = ({ gotoNextPage, gotoPrevPage, page, totalPages }) => {
  return (
    <>
      <div className="pagination">
        <div className="pagination-btns">
          <button onClick={gotoPrevPage}>⏪</button>
          <span>
            {page + 1} de {totalPages}{" "}
          </span>
          <button onClick={gotoNextPage}>⏩</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
