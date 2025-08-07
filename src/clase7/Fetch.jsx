import { useEffect, useState } from "react";

const Fetch=()=>{
    // const usuarios=[];
    // const [usuarios,setUsuarios]=useState([])
    const [productos,setProductos]=useState([])

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(respuesta=> respuesta.json())
    //     .then(resultado=>{
    //         setUsuarios(resultado);
            
    //     })
    //     .catch(error=>{
    //         console.log("hay un error!");
            
    //         console.log(error);
            
    //     })
    // },[])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(respuesta=> respuesta.json())
        .then(data=>setProductos(data))
    })

    return(
        <div className="container my-5">
            <div className="row">
                <h1>Fetch API</h1>
                {
                    productos.map(item=>(
                        <div className="col-md-3 mb-3" key={item.id}>
                            <div className="card border-0 shadow-lg p-5">
                                <img src={item.image} className="card-img-top" alt={item.title}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-light">{item.title}</h5>
                                    <p className="card-text fw-bold fs-4">S/ {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Fetch