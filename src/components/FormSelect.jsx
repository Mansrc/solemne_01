import React from "react"
import FormLine from "../components/FormLine"

function FormSelect(props){
    return(
        <FormLine>
            <select required  className="inputs">
            <option value="" disabled selected>{props.label}</option>
                {
                    props.options.map((option,key)=>(
                        <option value={option.value}>{option.label}</option>
                        
                    ))
                }
            </select>
        </FormLine>
    )
}

export default FormSelect;