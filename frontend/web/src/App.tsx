import { useEffect } from "react";
import { Routes } from "./routes/routes";
import api from "./server/api";
import { Product } from "./utils/types";


function App() {

  //const { products } = require('./assets/products.json')



  // useEffect(() => {
  //   async function saveProduct(product: Product){
  //     await api.post('/products', product);
  //   }
  //   products.forEach((product: Product) => {
  //     saveProduct(product)
  //   })
  // },[]);

  return (
    <Routes />
  );
}

export default App;
