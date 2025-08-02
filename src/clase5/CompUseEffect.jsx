import { useEffect, useState } from "react"
import CompUseEffect2 from "./CompUseEffect2";



const CompUseEffect=()=>{
    const [contador1,setContador1]=useState(1);
    const [contador2,setContador2]=useState(1);
    const [visible,setVisible]=useState(true);
    
    //opcion #1 Sin dependencias (solo se va a ejecutar la primara vez que se monte el componente)
    // useEffect(()=>{
    //     console.log("2- Actualizacion del Componente")
    // }, [])
    //opcion #2 Con alguna dependencia (solo se va a ejecutar cuando detecte algun cambio en el estado que pasemos como dependencia)
    // useEffect(()=>{
    //     console.log("2- Actualizacion del Componente (Contador#1)")
    // }, [contador1])
    
    // useEffect(()=>{
    //     console.log("2- Actualizacion del Componente (Contador#2)")
    // }, [contador2])
    
    // useEffect(()=>{
    //     console.log("2- Actualizacion del Componente (Contador#1 o #2)")
    // }, [contador1,contador2])


    //Opcion #3 => Sin dependencias (esta atento a cualquier cambio de todos los estados/props de mi app)
    useEffect(()=>{
        console.log("2- Actualizacion del Componente !")
    },)


    const aumentarContador1 =()=>{
        setContador1(contador1+1);
    }
    const aumentarContador2 =()=>{
        setContador2(contador2+1);
    }

    const desmontarComponente2=()=>{
        setVisible(false)
    }

    console.log("1- Montaje del Componente");

    return(
        <div className="container">
            <div className="row my-3">
                <div className="col">
                    <h2>Contador #1: {contador1}</h2>
                    <button className="btn btn-dark" onClick={aumentarContador1}>Click en Contador #1</button>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <h2>Contador #2: {contador2}</h2>
                    <button className="btn btn-dark" onClick={aumentarContador2}>Click en Contador #2</button>
                </div>
            </div>
            {visible? <CompUseEffect2/> : "" }
            <button className="btn btn-danger" onClick={desmontarComponente2}>Desmontar componente #2</button>
        </div>
    )
}

export default CompUseEffect