import ItemList from "./ItemList";
import hocFilterProducts from "../../hoc/hocFilterProducts";
import "./itemlistcontainer.css";

const ItemListWithHoc = hocFilterProducts(ItemList);
const ItemListContainer = () => {
  return (
    <div className="itemlistcontainer">
      <ItemListWithHoc />
    </div>
  );
};

export default ItemListContainer;
