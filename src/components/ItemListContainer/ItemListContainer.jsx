import useProducts from '../../hooks/UseProducts';
import ItemList from './ItemList';
import Loading from '../Loading/Loading';
import hocFilterProducts from '../../hoc/hocFilterProducts';

import "./itemlistcontainer.css";

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
