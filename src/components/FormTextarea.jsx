import React from "react";
import FormLine from "./FormLine";

function FormTextarea(props){
    return (
        <FormLine label ={props.label}>
            <textarea  type={props.type}
              
             rows="7" required
             placeholder={props.placeholder}>
             
             </textarea>
        </FormLine>
    );
}

export default FormTextarea;