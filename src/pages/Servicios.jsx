import React from "react";
import Tarjeta from "../components/Tarjeta";
import Image1 from "../components/1.jpg";
import Image2 from "../components/2.jpg";
import Image3 from "../components/3.jpeg";
import Navbar from "../components/Navbar"
import Separacion from "../components/Separacion"


const servicio=[
     {label:"30 Min."},
     {label:"$25000"},
]
const servicio2=[
    {label:"45 Min."},
    {label:"$45000"},
]
const servicio3=[
    {label:"1 hr."},
    {label:"$90000"},
]

function Servicios(){

    return(
        <>
        <Navbar/>
        <Separacion/>
        <div id="yue">
        <Tarjeta img={Image1} texto={servicio} label="Scanner silver" href="servicios/scannerSilver"/>
        <Tarjeta img={Image2} texto={servicio2} label="Scanner gold" href="servicios/scannerGold"/>
        <Tarjeta img={Image3} texto={servicio3} label="Scanner platinium" href="servicios/scannerplatinium"/>
        </div>
        </>
    );
}

export default Servicios;