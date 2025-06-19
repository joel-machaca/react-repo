import { useState } from "react"

const ContadorConBoton=({numero,})=>{
    const[count,setCount]=useState(numero)
    const incrementar=()=>{
        if (count <10) {
            setCount(count+1)
        }
    }
    const decrementar=()=>{
        if(count> 0){
            setCount(count-1)
        }
    }
    return(
        
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <ButtonMenos callback1={decrementar}/>
                    <button type="button" class="btn btn-dark">{count}</button>
                    <ButtonMas callback={incrementar}/>
                </div>
            </div>
        </div>

    )
}

const ButtonMas=({callback})=>{
    return(
        
        <button className="btn btn-primary" onClick={callback}> + </button>
    )
}
const ButtonMenos=({callback1})=>{
    return(
        
        <button className="btn btn-primary" onClick={callback1}> - </button>
    )
}

export default ContadorConBoton