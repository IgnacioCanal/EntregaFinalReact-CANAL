import { useState } from "react";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    nombres: "",
    apellidos: "",
    telefono: "",
    redes: "",
    email: "",
    repetiremail: "",
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrecio, deleteCart } = useContext(CartContext);

  const handleChangeInput = (evento) => {
    setDataForm({ ...dataForm, [evento.target.name]: evento.target.value });
  };

  const handleSubmitForm = (evento) => {
    evento.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const order = {
      Comprador: { ...dataForm },
      Productos: [...cart],
      Fecha: Timestamp.fromDate(new Date()),
      Total: totalPrecio(),
    };

    uploadOrder(order);
  };

  const isFormValid = () => {
    const { nombres, apellidos, telefono, email, repetiremail } = dataForm;
    if (!nombres || !apellidos || !telefono || !email || !repetiremail) {
      toast.info("Por favor complete todos los campos obligatorios(*).");
      return false;
      0;
    }

    if (email !== repetiremail) {
      toast.error("Los emails no coinciden.");
      return false;
    }

    return true;
  };

  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        setOrderId(response.id);
      })
      .finally(() => {
        toast.success("¡Gracias por Elegirnos!");
        updateStock();
      });
  };

  const updateStock = () => {
    cart.map(({ cantidad, id, ...productCart }) => {
      const productRef = doc(db, "productos", id);
      setDoc(productRef, {
        ...productCart,
        stock: productCart.stock - cantidad,
      });
    });

    deleteCart();
  };

  return (
    <div className="checkout">
      {orderId ? (
        <div>
          <h2>Orden enviada correctamente 😁</h2>
          <p>Guarde su número de seguimiento: {orderId}</p>
          <Link to="/" className="button-to-home">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
