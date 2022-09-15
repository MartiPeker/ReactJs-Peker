import producto from "../data/productos.json"

const getItem = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto[0])
        }, 2000)
    })

    return task
};

export default getItem;