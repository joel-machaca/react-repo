import { useEffect, useState } from "react";
import productos from "../assets/productos.json"
import { useParams } from "react-router-dom";
const ItemDetailContainer=()=>{
    
    const [item,setItem]= useState([])
    const {id} =useParams();
    const promesa = new Promise(resolve=>{
        setTimeout(() => {
            resolve(productos);
            
        }, 3000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            setItem(resultado.find(item=>item.id ===Number(id)))
        })
    },[id])
    
    return(
        <div className="container my-5">
            <div className="row shadow-lg p-4 rounded">
                <div className="col-md-5 offset-md-1 text-end">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="col-md-5">
                    <h1 className="fw-bold">{item.title}</h1>
                    <p>{item.description}</p>
                    <p className="fw-bold">${item.price}</p>
                </div>
            </div>
        </div>
        
    )
}
export default ItemDetailContainer