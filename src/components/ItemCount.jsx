import { useState } from "react"

const ItemCount=({stock,onAdd})=>{
    const [counter,setCounter] = useState(1)

    const aumentarCounter=()=>{
        setCounter(prev=>{

            return prev<stock? prev+1:prev;
        })
    }
    const decrementarCounter=()=>{
        setCounter(prev=>{
            return prev>1? prev-1:prev;
        })
    }


    return(
        <div className="my-4">
            <div className="btn-group">
                <button className="btn btn-warning"onClick={decrementarCounter}> - </button>
                <button className="btn btn-warning"> {counter} </button>
                <button className="btn btn-warning" onClick={aumentarCounter}> + </button>
            </div>
            <div className="my-2">
                <button className="btn btn-warning fw-bold" onClick={()=>onAdd(counter)}>agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount