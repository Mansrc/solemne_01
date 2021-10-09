import React from "react";
import FormLine from "./FormLine";

function FormInput(props){
    return (
        <FormLine label ={props.label}>
            <input
                type = {props.type}
                placeholder ={props.placeholder}
                className="inputs"
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                onWheelCapture={props.onWheelCapture}
          />
        </FormLine>
    );
}

export default FormInput;