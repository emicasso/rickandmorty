import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  //nos permite crear un estado para poder guardar los datos de la api
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  //creamos una const con la url para enviarla como parametro
  const initalUrl = "https://rickandmortyapi.com/api/character";

  //funcion que retorna una promesa
  const fetchCaracters = (url) => {
    fetch(url)
      //convertimos la respuesta que nos da la
      //api en un objeto JS con JSON
      .then((response) => response.json())
      //los datos se van a guardar, ya que el setCharacters modifica el estado
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      //situacion de error
      .catch((error) => console.log(error));
  };

  const onPrevious = () =>{
    fetchCaracters(info.prev);
  }
  const onNext = () =>{
    fetchCaracters(info.next);
  }

  //ejecuta una sola vez cuando se renderisa ya que esta []
  useEffect(() => {
    fetchCaracters(initalUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
