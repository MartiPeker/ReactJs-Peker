import { Routes, Route} from "react";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailsContainer";
import ItemListContainer from "./data/ItemListContainer";
import Home from "./pages/Home";

function App() {
  
  return (<>
      
         <Navbar>
           <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/productos" element={<ItemListContainer/>}></Route>
             <Route path="/detalles/:id" element={<ItemDetailContainer titulo="Detalles"/>}></Route>
           </Routes>
          </Navbar>
      
     <p>hola</p>

      </>
  );
}

export default App;