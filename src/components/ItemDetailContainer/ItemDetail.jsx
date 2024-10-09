
const ItemDetail = ({ product }) => {
  return (
    <div className="itemdetailcontainer">
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt="" />
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
    </div>
  )
}

export default ItemDetail
