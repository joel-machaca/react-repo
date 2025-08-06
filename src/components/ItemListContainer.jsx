import { useEffect, useState } from "react";
import productos from "../assets/productos.json"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
const ItemListContainer=()=>{
    
    const [items,setItems]= useState([])
    const promesa = new Promise((resolve=>{
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    }));
    useEffect(()=>{
        promesa.then(resultado=>{
            setItems(resultado)
        })
    })
    
    return(
        <div className="container my-5">
            <div className="row">
                    <ItemList items={items}/>
            </div>
        </div>
        
    )
}
export default ItemListContainer