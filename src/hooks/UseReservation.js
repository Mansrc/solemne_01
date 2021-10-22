import React,{useState} from 'react'
import axios from 'axios'
const UseForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)
  const [errorhora, seterrorhora] = useState(false)
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
        let user = promises.data
        console.log(promises)
        user.map(e=>{
          if(e.fecha === form.fecha && e.hora === form.hora){
            
            return seterrorhora(true)
           
          }else{
            seterrorhora(false)
          }
        })
      })
      .catch(error=>{
        console.log(error)
      })
      if(errorhora === false){
        
        axios({
          method:"post",
          url:"http://localhost:5000/reserva",
          data:form
        })
        .then((respons)=>{
          
            console.log(respons.data.id)
            setForm(initialForm)
       
        })
        .catch((error)=>{
          alert(error)
        })
        return
      }
      
    }
}

  return {
    form,
    errors,
    loading,
    response,
    errorhora,
    handleChange,
    handleBlur,
   handleSubmit
  };
}
 
export default UseForm;
