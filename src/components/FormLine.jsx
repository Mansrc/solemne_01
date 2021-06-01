import React from "react";


function FormLine(props){
    return(
        <div className ="inputsinline">
        <label class="label_tarjeta">{props.label}</label>
        {props.children}
    </div>
    );
}

export default FormLine;