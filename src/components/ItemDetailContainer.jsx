import { useContext, useEffect, useState } from "react";
import productos from "../assets/productos.json"
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import Loading from "./Loading";
const ItemDetailContainer=()=>{
    const [loading,setLoading]=useState(true)
    const [item,setItem]= useState([])
    const {id} =useParams();
    const [visible,setVisible]=useState(true)
    const { addItem }=useContext(CartContext)
    
    useEffect(()=>{
        const promesa = new Promise(resolve=>{
            setTimeout(() => {
                resolve(productos);
                
            }, 3000);
        })
        promesa.then(resultado=>{
            setItem(resultado.find(item=>item.id ===Number(id)))
            setLoading(false)
        })
    },[id])

    const onAdd=(quantity)=>{
        addItem(item,quantity)
        setVisible(false)
    }

    if(loading){
        return(
            <Loading/>
        )
    }

    
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
                    {visible?<ItemCount stock={item.stock} onAdd={onAdd}/>:<Link to={"/cart"} className="text-decoration-none btn btn-warning fw-bold">Terminar mi compra</Link>}
                </div>
            </div>
        </div>
        
    )
}
export default ItemDetailContainer