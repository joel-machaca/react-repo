import { useContext, useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import Loading from "../components/Loading";
import { CartContext } from "../components/context/CartContext";

const FirebaseDoc=()=>{
    const {addItem}=useContext(CartContext)
    const [loading,setLoading]=useState(true)
    const [visible,setVisible]=useState(true)
    const [item,setItem]=useState({})

    useEffect(()=>{
        const db=getFirestore();

        const productoRef=doc(db,"items","iSxlrAm4NGaMHWuQOuma");
        getDoc(productoRef)
        .then(snapShot=>{
            if(snapShot.exists()){
                console.log(snapShot.id)
                console.log(snapShot.data())
                let product ={id:snapShot.id, ...snapShot.data()}
                console.log(product)
                setItem(product)
                setLoading(false)
            }else{
                console.log("el documento no existe")
            }
        })
    },[])

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
                <div className="col-md-5 offset-md-1 text-end me-5">
                    <img src={item.imagen} alt={item.nombre} style={{width:300,height:300}}/>
                </div>
                <div className="col-md-5">
                    <h1 className="fw-bold">{item.nombre}</h1>
                    <p className="fw-bold">${item.precio}</p>
                    {visible?<ItemCount stock={10} onAdd={onAdd}/>:<Link to={"/cart"} className="text-decoration-none btn btn-warning fw-bold">Terminar mi compra</Link>}
                </div>
            </div>
        </div>
    )
}
export default FirebaseDoc;