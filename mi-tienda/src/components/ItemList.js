//ItemList es solo para mapear?

function itemList() {
    {item.map(Item =>
        <div key={Item.id} className="card m-3 text-center col-2"> Producto: {Item.nombre} ${Item.valor} <ItemCount stock key = {Item.stock}></ItemCount> </div>)}
}

export default itemList();