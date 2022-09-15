import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import  getItem  from "../components/getItem";

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getItem().then((data) => {
            setDetails(data)
        });

    }, []);

    return (
        <div>
            <ItemDetail 
                title={details.title} 
                src= {details.src} 
                info={details.info} 
                value={details.value} 
                stock={details.stock}/>
        </div> 
   )
}

export default ItemDetailContainer;