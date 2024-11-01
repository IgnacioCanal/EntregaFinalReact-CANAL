const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form-checkout" >
      <h2>Complete sus datos para que se puedan comunicar con usted desde el local</h2>
      <div className="content-input">
        <label className="label">Nombre completo: </label>
        <input type="text" name="nombrecompleto" value={dataForm.fullname} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">Telefono:</label>
        <input type="number" name="telefono" value={dataForm.phone} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">Redes:</label>
        <input type="number" name="redes" value={dataForm.phone} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">Email:</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">Repetir Email</label>
        <input type="email" name="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} />
      </div>
      <button type="submit" className="button-send-order">Enviar orden de Compra</button>
    </form>
  )
}
export default FormCheckout