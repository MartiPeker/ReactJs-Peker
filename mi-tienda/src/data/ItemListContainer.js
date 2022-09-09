import {React, useState, useEffect} from 'react';
import ItemCount from "../components/itemCount";
import getData from '../components/getData';

const ItemListContainer = () => {
  <></>
  const [item, setItem] = useState([]);
  useEffect(()=>{
    getData().then((data) => {
      setItem(data);
    })
  }, []);

  return (
    <>
    {item.map(Item =>            
        <div className="card m-3 text-center col-2"> Producto: {Item.nombre} ${Item.valor} <ItemCount stock = {Item.stock}></ItemCount> </div>)}
    </>
  )
};
  




export default ItemListContainer;