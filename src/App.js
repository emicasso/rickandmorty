import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  const initalUrl = "https://rickandmortyapi.com/api/character";

  const fetchCaracters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCaracters(initalUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="container mt-5">
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
