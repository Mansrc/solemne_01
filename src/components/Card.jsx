import React from "react";



function Card(props){
    return(
        <section id="card">
                <header>
                    <h3 className="titulo">{props.title}</h3>
                </header>
                {props.children}
            </section>
    );
}


export default Card;