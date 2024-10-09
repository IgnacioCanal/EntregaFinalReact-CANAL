import ItemList from './ItemList';
import Loading from '../Loading/Loading';
import hocFilterProducts from '../../hoc/hocFilterProducts';
import "./itemlistcontainer.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from './Productos';

const ItemListContainer = ({products}) => {
  

  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  );
};

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

//export default ItemListContainer
