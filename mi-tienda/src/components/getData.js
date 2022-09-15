import producto from "../data/productos.json"

const getData = () => {
  const task = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(producto);
      }, 2000)
  })

  return task
};

export default getData;