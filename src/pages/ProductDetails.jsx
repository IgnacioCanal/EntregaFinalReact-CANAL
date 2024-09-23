import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import ProductService from "../service/ProductService";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        ProductService.getProductById(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;