import { useEffect, useState } from "react";
import productos from "../assets/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
const ItemListContainer=()=>{
    const [loading,setLoading]=useState(true);
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
            setLoading(false)
        })
    },[id])
    
    return(
        <div className="container my-5">
            <div className="row">
                    {loading?<Loading/>:<ItemList items={items}/>}
            </div>
        </div>
    )
}
export default ItemListContainer