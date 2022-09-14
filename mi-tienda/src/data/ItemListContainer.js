import {React, useState, useEffect} from 'react';
import ItemCount from "../components/itemCount";
import getData from '../components/getData';
import ItemList from '../components/itemList';

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
    </>
  )
};
  




export default ItemListContainer;