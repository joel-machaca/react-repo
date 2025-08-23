import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import products from "../../src/assets/productos.json"


const FirebaseCollection=()=>{
    const [loading,setLoading]=useState(true)
    const [items,setItems]=useState({})

    //accediendo a una collection completa
    // useEffect(()=>{
    //     const db=getFirestore();
    //     const itemsCollection=collection(db, "items")
        
    //     getDocs(itemsCollection)
    //     .then(snapShot=>{
    //         const datos=snapShot.docs.map(item=>({id:item.id, ...item.data()})) 
    //         console.log(datos)
    //         setItems(datos)
    //         setLoading(false)
    //     })
    // },[])


    //accediendo a una collection mediante filtros
    // useEffect(()=>{
    //     const db=getFirestore();
    //     const itemsCollection=collection(db, "items")
    //     const q=query(itemsCollection,(where("categoria","==","gaseosas"),where("precio","<=",1900)))
        
    //     getDocs(q)
    //     .then(snapShot=>{
    //         const datos=snapShot.docs.map(item=>({id:item.id, ...item.data()})) 
    //         console.log(datos)
    //         setItems(datos)
    //         setLoading(false)
    //     })
    // },[])


    //accediendo a una collection mediante filtros y poniendo limites
    // useEffect(()=>{
    //     const db=getFirestore();
    //     const itemsCollection=collection(db, "items")
    //     const q=query(itemsCollection,(where("precio","<",4000),limit(1)))
        
    //     getDocs(q)
    //     .then(snapShot=>{
    //         const datos=snapShot.docs.map(item=>({id:item.id, ...item.data()})) 
    //         console.log(datos)
    //         setItems(datos)
    //         setLoading(false)
    //     })
    // },[])

    //carga de Productos en nuestra coleccion de FireStore
    // useEffect(()=>{
    //     const db=getFirestore();
    //     const itemsCollection=collection(db, "items")

    //     for(const producto of products){
    //         addDoc(itemsCollection,producto);
    //     }
    //     console.log("Proceso terminado")
    // },[])

    if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <div className="container my-5">
            <div className="row shadow-lg p-4 rounded">
                {
                    items.map(item=>(
                        <div className="col-md-3 mb-4" key={item.id}>
                            <div className="card border-0 text-center shadow">
                                <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                                <div className="card-body">
                                    <p className="card-text">{item.nombre}</p>
                                    <p className="card-text fw-bold fs-1">S/ {item.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }


















                {/* <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>imagen</th>
                            <th>producto</th>
                            <th>categoria</th>
                            <th>precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item=>(
                                <tr key={item.id}>
                                    <td className="">{item.id}</td>
                                    <td><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.precio}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}
export default FirebaseCollection;