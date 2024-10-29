import { useState } from "react"
const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    nombrecompleto: "",
    telefono: "",
    email: ""
  })

  const handleChangeInput = (evento) =>{
    setDataForm({...dataForm, [evento.target.name]: evento.target.value })
  }

  const handleSubmitForm = (evento) =>{
    evento.preventDefault()

    
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
       <label> Nombre Completo: </label>
       <input type="text" name="nombrecompleto" value={dataForm.nombrecompleto} onChange={handleChangeInput} />
       <label> Teléfono: </label>
       <input type="number" name="telefono" value={dataForm.telefono} onChange={handleChangeInput} />
       <label> Email: </label>
       <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
       <button type="submit">Enviar Orden</button>
      </form>
    </div>
  )
}

export default Checkout
