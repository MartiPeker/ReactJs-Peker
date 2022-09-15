const Item = ({id, title, src, value}) => {
    return (
        <div className="card m-3 text-center col-5">
            <p>{id}</p>   
            <h6 className="card-header">{title}</h6>
            <img className="card-image m-5" src={src} alt={title}/>
            <p className="">Valor: ${value}</p>
            <button className="card-body">Detalle</button>
        </div>
      )
}

export default Item;