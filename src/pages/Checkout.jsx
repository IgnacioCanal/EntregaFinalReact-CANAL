const Checkout = () => {
  return (
      <div>
          <h2>Finalizar Compra</h2>
          <form>
              <div>
                  <label>Nombre</label>
                  <input type="text" name="name" />
              </div>
              <div>
                  <label>Dirección</label>
                  <input type="text" name="address" />
              </div>
              <button type="submit">Pagar</button>
          </form>
      </div>
  );
};

export default Checkout;