import { useState } from "react"

const Estados=()=>{
    let textoVar="hace click aqui! (var)"
    const[textoBoton, setTextoBoton]= useState("hace click aqui!(state)")



    const modificarTextoVariable=()=>{
        console.log("estoy aca variable")
        textoVar="gracias por hacer click! (var)"
    }
    const modificarTextoEstado=()=>{
        console.log("estoy aca state")
        setTextoBoton("gracias por hacer click (state)");
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