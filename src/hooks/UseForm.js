import React,{useEffect, useState} from 'react'
import axios from 'axios'
const UseForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)
  const [codigoError, setcodigoError] = useState(true)
  const [idCode, setidCode] = useState(null)
  useEffect(() => {

    axios({
      url:"http://127.0.0.1:8000/code"
    })
    .then((respons)=>{
        let arregloCode = respons.data
        let resultadoCode = arregloCode.find(e=> (e.code===form.code))
        if(resultadoCode){
          setcodigoError(false)
          setidCode(resultadoCode.ID)
          console.log(resultadoCode)
          console.log(idCode)

        }else{
          setcodigoError(true)
        }
    })
    .catch((error)=>{
      alert(error)
    })
  }, [form])
  const handleChange =(e)=>{
    setForm(
      {...form,
      [e.target.name]:e.target.value
    }
    )
  }; 
  const handleBlur =(e)=>{
    handleChange(e)
    setErrors(validateForm(form,codigoError))
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
    if(Object.keys(errors).length===0){
      console.log("no hay errores")
      axios({
        method:"post",
        url:"http://127.0.0.1:8000/users",
        data:form
      })
      .then((respons)=>{
        console.log(respons)
            axios({
              method:"delete",
              url:`http://127.0.0.1:8000/code/${idCode}`,
            })
            .then((respons)=>{
                console.log(respons)
                alert(`Felicidades, tu cuenta ha sido registrada`)
                setForm(initialForm)
            })
            .catch((error)=>{
              alert(error)
            })
      })
      .catch((error)=>{
        alert(error)
      })
    }
}

  return {
    form,
    errors,
    loading,
    response,
    codigoError,
    handleChange,
    handleBlur,
   handleSubmit
  };
}
 
export default UseForm;
