import useProducts from "../hooks/UseProducts"
import { useState } from "react"
const hocFilterProducts = (Component) => {

  return function () {
    const { products } = useProducts()
    const [query, setQuery] = useState("")
    const [typeOrder, setTypeOrder] = useState ("")

    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase())
    }

    const search = () => {
      let filterProducts =products.filter( (products) => (
        products.nombre.toLowerCase().includes(query)
      ))

      if(typeOrder === "minor"){
        filterProducts = filterProducts.sort((prevProducts, nextProducts) =>{
          return prevProducts.precio - nextProducts.precio
        })
      } else if(typeOrder === "mayor"){
        filterProducts = filterProducts.sort((prevProducts, nextProducts) =>{
          return nextProducts.precio - prevProducts.precio
        })
      }

      return filterProducts
    }



    return(
      <>
        <div>
          <input type="text" placeholder="buscar..." onChange={changeInput} />
          <button onClick={ () => setTypeOrder("minor") }>Menor Precio</button>
          <button onClick={() => setTypeOrder("mayor")}>Mayor a Precio</button>
        </div>
      <Component products={search()}/>
      </>
    )

  }
}

export default hocFilterProducts
