import React from "react";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailsContainer";
import ItemListContainer from "./data/ItemListContainer";

function App() {
  return (
  <>
    <Navbar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
);
}

export default App;
