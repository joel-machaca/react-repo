import { useState } from "react"


const ContadorConReinicio=({numero})=>{
    const [count,setCount]=useState(numero)
    const incrementando=()=>{
        if (count <10) {
            setCount( count+ 1)
        }
    }
    const decrementando=()=>{
        if (count >0) {
            setCount(count - 1)
        }
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <ButtonMenos decrementando={decrementando}/>
                    <button className="btn btn-dark">{count}</button>
                    <ButtonMas incrementando={incrementando}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ButtonReset reiniciando={reset}/>
                </div>
            </div>
        </div>
    )
}

const ButtonMas=({incrementando})=>{
    return(
        <button className="btn btn-primary" onClick={incrementando}> + </button>
    )
}


const ButtonMenos=({decrementando})=>{
    return(
        <button className="btn btn-warning" onClick={decrementando}> - </button>
    )
}

const ButtonReset=({reiniciando})=>{
    return(
        <button className="btn btn-danger" onClick={reiniciando}>Click aqui para reiniciar</button>
    )
}
export default ContadorConReinicio