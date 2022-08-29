import productos from "./data/productos.json"
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <div class= "p-5">
      <h2>Productos</h2>
        {
          productos.map(producto =>            
            <div class="card m-3 text-center"> Producto: {producto.nombre} ${producto.valor}</div>
            )
        }
        </div>
    </div>
  );
}

export default App;
