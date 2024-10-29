import ItemList from './ItemList';
import Loading from '../Loading/Loading';
import hocFilterProducts from '../../hoc/hocFilterProducts';
import "./itemlistcontainer.css";


const ItemListContainer = ({products, loading}) => {
  

  return (
    <div className="itemlistcontainer">
      {loading ? (<Loading />) : (<ItemList products={products} />)}
    </div>
  );
};

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc
