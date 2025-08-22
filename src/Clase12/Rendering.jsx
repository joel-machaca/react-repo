import { useEffect, useState } from "react";

const Rendering=()=>{
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])


    const cargarContenido=()=>{
        setLoading(false)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    {loading? <h1 className="fw-light text-danger">Cargando...</h1>:<h1 className="text-success fw-bold">Cargado!</h1>}
                    <h1 className="text-success fw-bold">{loading?"Cargando...":"Cargado!"}</h1>
                    <p><button className="btn btn-dark" onClick={cargarContenido}>Cargar</button></p>
                </div>
            </div>
        </div>
    )
}
export default Rendering;