import {useState, useEffect} from "react"
import { getProducts } from "../components/ItemListContainer/Productos.js"
import { useParams } from 'react-router-dom';
const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const {idcategoria} = useParams()
  useEffect(()=> {
    setLoading(true)


    getProducts()
      .then((data) =>{
        if (idcategoria){
          const filterProducts = data.filter((product)=> product.categoria === idcategoria)
        setProducts(filterProducts)
      }else{
        setProducts(data)
      }
        })
      .finally(() => setLoading(false))

  },[idcategoria])

  return { products, loading }


}

export default useProducts