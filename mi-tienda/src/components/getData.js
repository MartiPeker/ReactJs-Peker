import Item from "./Item"
const getData = () => {
    const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Item)})
  }, 2000);
  return task;
}

export default getData;