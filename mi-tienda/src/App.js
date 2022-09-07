import React from "react";
import productos from "./data/ItemListContainer.json"
import Navbar from "./components/NavBar";
import ItemCount from "./components/itemCount";

function App() {


  return (
    <>
      <Navbar/>
      <div class= "text-center"></div>
        {productos.map(producto =>            
        <div class="card m-3 text-center"> Producto: {producto.nombre} ${producto.valor}<ItemCount stock= {producto.stock}/></div>
        )}
        
    </>
 
);
}


export default App;
