import React,{useState} from 'react'
import axios from 'axios'
const UseForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)
  const handleChange =(e)=>{
    setForm(
      {...form,
      [e.target.name]:e.target.value
    }
    )
    
  }; 
  const handleBlur =(e)=>{
    handleChange(e)
    setErrors(validateForm(form))
    
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    
    console.log(form)
    if(Object.keys(errors).length===0){
      axios.get('http://localhost:5000/reserva')
      .then(promises=>{
        let user = promises
        console.log(user.name)
        user.map(e=>{
          if(e.fecha === form.fecha && e.hora === form.hora){
            console.log("coneccion encontrada")
           
          }else{
            console.log("conexion no encontrada")
          }
        })
      })
      .catch(error=>{
        console.log(error)
      })
      
    }
}

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
   handleSubmit
  };
}
 
export default UseForm;
