const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form-checkout" >
      <h3>Complete sus datos para que se puedan comunicar con usted desde el local</h3>
      <div className="content-input">
        <label className="label">*Nombres: </label>
        <input type="text" name="nombres" value={dataForm.nombres} onChange={handleChangeInput} />
      </div>
      <div className="content-input">
        <label className="label">*Apellidos: </label>
        <input type="text" name="apellidos" value={dataForm.apellidos} onChange={handleChangeInput} />
      </div>
      <div className="content-input">
        <label className="label">*Telefono:</label>
        <input type="number" name="telefono" value={dataForm.telefono} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">Redes Sociales:</label>
        <input type="text" name="redes" value={dataForm.redes} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">*Email:</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
      </div>

      <div className="content-input">
        <label className="label">*Repetir Email:</label>
        <input type="email" name="repetiremail" value={dataForm.repetiremail} onChange={handleChangeInput} />
      </div>
      <button type="submit" className="button-send-order">Enviar orden de Compra</button>
    </form>
  )
}
export default FormCheckout