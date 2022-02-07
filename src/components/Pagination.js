import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item mx-3">
            <button className="page-link rounded" onClick={handlePrevious}>
              Anterior
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link rounded" onClick={handleNext}>
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
