import React, { useState } from "react";
import { MainDiv } from "./app";
import Prices from "./components/prices";
import PersonsProxy from "./components/personsProxy";

function App() {
  const [pages, setPages] = useState(false);

  return (
    <MainDiv>
      <button
        id="pageBtn"
        onClick={() => {
          setPages(!pages);
        }}
      >
        Mudar página
      </button>
      {pages ? <Prices /> : <PersonsProxy />}
    </MainDiv>
  );
}

export default App;
