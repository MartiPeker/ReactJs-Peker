//En este componente va solo la estructura del item? Cuando le doy la información? en el ItemList mismo donde la mapeo o en ItemListContainer?

const Item = (props) => {
    return (
        <div className="card">            
            <h4>{props.name}</h4>
            <img src ={props.src}></img>
            <p>Valor: ${props.valor}</p>
        </div>
      )
}

export default Item;