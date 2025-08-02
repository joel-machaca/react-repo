import { useState } from "react"

const ItemCount=({productoCantidad})=>{
    const [counter,setCounter] = useState(1)

    const aumentarCounter=()=>{
        setCounter(prev=>{
            return prev<productoCantidad? prev+1:prev;
        })
    }
    const decrementarCounter=()=>{
        setCounter(prev=>{
            return prev>1? prev-1:prev;
        })
    }

    const onAdd=()=>{
        console.log(`tu producto se guardo en el carrito y la cantidad es ${counter}`)
    }

    return(
        <div className="my-4">
            <div className="btn-group">
                <button className="btn btn-warning"onClick={decrementarCounter}> - </button>
                <button className="btn btn-warning"> {counter} </button>
                <button className="btn btn-warning" onClick={aumentarCounter}> + </button>
            </div>
            <div className="my-2">
                <button className="btn btn-warning" onClick={onAdd}>agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount