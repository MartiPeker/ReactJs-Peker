import productos from "./data/productos.json"

function App() {
  return (
    <div className="App">
        {
          productos.map(producto =>            
            <li> Producto: {producto.nombre} ${producto.valor}<hr/></li>
            )
        }
    </div>
  );
}

export default App;
