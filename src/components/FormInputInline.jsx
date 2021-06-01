import React from "react";
import FormLine from "./FormLine";



function FormInputInline(props){
    return (
        <div className="abajo">
            <FormLine label ={props.label} >
            <input
                type = {props.type}
                placeholder ={props.placeholder}
                
                onChange ={props.onChange}
               value={props.value}
               className="inputsinline"
            />
        </FormLine>
        </div>
        
    );
}

export default FormInputInline;