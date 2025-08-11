import { useEffect, useState } from "react";
import productos from "../assets/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer=()=>{
    
    const [items,setItems]= useState([])
    const {id}=useParams();

    
    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        })
        promesa.then(resultado=>{
            setItems(id? productos.filter(item=>item.category===id) : resultado);
        })
    },[id])
    
    return(
        <div className="container my-5">
            <div className="row">
                    <ItemList items={items}/>
            </div>
        </div>
        
    )
}
export default ItemListContainer