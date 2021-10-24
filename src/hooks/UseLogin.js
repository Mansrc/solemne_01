import React,{useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const UseForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)
  const [encontrado, setencontrado] = useState(true)
  const handleChange =(e)=>{
    setForm(
      {...form,
      [e.target.name]:e.target.value
    }
    )
  }; 
  const gotoLoginTrabajador =()=>{

  }
  const handleBlur =(e)=>{
    handleChange(e)
    setErrors(validateForm(form))
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    if(Object.keys(errors).length===0){
       axios.get('http://127.0.0.1:8000/users')
      .then(promises=>{
        let user = promises.data
        user.map(e=>{
          if(e.email === form.email && e.password === form.password){
            console.log("coneccion encontrada")
            setLoading(true)
            setencontrado(true)
          }else{
            setencontrado(false)
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
    encontrado,
    handleChange,
    handleBlur,
   handleSubmit
  };
}
 
export default UseForm;
