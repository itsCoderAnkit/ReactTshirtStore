import { useState } from "react";
import AddProductForm from "./components/AddProductForm";
import ShowAddedProducts from "./components/ShowAddedProducts";
import ProductDetails from "./components/ProductDetails";

function App() {

  const DummyProducts = [
    {
      name:'Armani',
      description:'Tshirt',
      price:'1000',
      large:'20',
      medium:'30',
      small:'40'
    }
  ]

  const [addedProduct, setAddedProduct] = useState(DummyProducts)

  const newProductAdded  =(product) =>{
    console.log("app.js new product " , product)
    setAddedProduct((oldProducts) =>{
      // console.log(oldProducts)
      return [product, ...oldProducts]
    })
    console.log(addedProduct)
  }
  return (
    <div>
     <AddProductForm onSaveNewProduct={newProductAdded}></AddProductForm>
    <ShowAddedProducts products ={addedProduct}></ShowAddedProducts>
    <ProductDetails></ProductDetails>
    </div>
  );
}

export default App;
