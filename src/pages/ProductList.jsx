
import { useEffect, useState } from "react";
//import productService from "../service/ProductService";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>Productos</h2>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;