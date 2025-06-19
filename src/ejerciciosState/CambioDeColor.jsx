import { useState } from "react"

const CambioDeColor=({numero,colorElegido,colorContador,CambioColor})=>{
    const[count,setCounter]=useState(numero)
    const asc=()=>{
        if (count<10) {
            setCounter(count+1)
        }
    }
    const desc=()=>{
        if (count>0) {
            setCounter(count-1)
        }
    }
    const Reseteo=()=>{
        setCounter(0)
    }
    const [camb,setCamb]=useState(colorElegido)
    const cambio=()=>{
        setCamb(x=>{
            if (x===colorElegido) {
                return CambioColor
            }else{
                return colorElegido
            }
        })
    }
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <BotonMenos bajada={desc} colorElegido={camb}/>
                    <button className={`btn btn-${colorContador}`}>{count}</button>
                    <BotonMas subida={asc} colorElegido={camb}/>
                </div>
            </div>
            <div className="row">
                <BotonReset reiniciar={Reseteo} colorElegido={camb}/>
            </div>
            <div className="row">
                <BotonCambioColor  CambioColor={cambio} colorElegido={camb}/>
            </div>
        </div>
    )
}

const BotonMas=({subida,colorElegido})=>{
    return(
        <button className={`btn btn-${colorElegido} my-2`} onClick={subida}> + </button>
    )
}
const BotonMenos=({bajada,colorElegido})=>{
    return(
        <button className={`btn btn-${colorElegido} my-2`} onClick={bajada}> - </button>
    )
}
const BotonReset=({reiniciar,colorElegido})=>{
    return(
        <button className={`btn btn-${colorElegido} my-2`} onClick={reiniciar}> reseteo </button>
    )
}
const BotonCambioColor=({CambioColor,colorElegido})=>{
    return(
        <button className={`btn btn-${colorElegido} my-2`} onClick={CambioColor}> cambiar color </button>
    )
}

export default CambioDeColor