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
      axios({
        method:"delete",
        url:`http://localhost:5000/reserva/${form.code}`,
        data:form
      })
      .then((respons)=>{
        
          alert("su hora ha sido borrada")
          setForm(initialForm)
     
      })
      .catch((error)=>{
        alert(error)
      })
      axios({
        method:"post",
        url:"http://localhost:5000/cancelacion",
        data:form
      })
      .then((respons)=>{
        
          console.log(respons.data.id)
          
     
      })
      .catch((error)=>{
        alert(error)
      })
      return
      
      
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
