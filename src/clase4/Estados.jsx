import { useState } from "react"

const Estados=()=>{

    let textoVar= "Haz clic aqui!!!#1(var)"

    const [textoBoton, setTextoBoton]= useState("Haz clic aqui!!!#2(state)")

    const modificarTextoVariable=()=>{
        console.log("se ejecuto pero no funcion")
        textoVar="gracias por hacer click#1(var)"
    }

    const modificarTextoEstado=()=>{
        setTextoBoton("gracias por hacer click#2(state)")
    }

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Estado (States)</h1>
                    <button className="btn btn-primary mx-1" onClick={modificarTextoVariable}>{textoVar}</button>
                    <button className="btn btn-primary mx-1" onClick={modificarTextoEstado}>{textoBoton}</button>
                    
                </div>
            </div>
        </div>
    )
}
// 1.24.30
export default Estados