import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Error404 from "./Error404";
const ItemListContainer=()=>{
    const [loading,setLoading]=useState(true);
    const [items,setItems]= useState([])
    const {id}=useParams();

    useEffect(()=>{
        const db=getFirestore()
        const itemsCollection=collection(db,"items")
        getDocs(itemsCollection)
        const q= id? query(itemsCollection,(where("category","==",id))):itemsCollection;
        getDocs(q)
        .then(snapShot=>{
            setLoading(false)
            if(snapShot.size>0){
                setItems(snapShot.docs.map(item=>({id:item.id,...item.data()})));
            }
        })
    },[id])
    
    if(loading){
        return(
            <Loading/>
        )
    }
    if(items.length== 0){
        return(
            <Error404 mensaje="no hay productos para esta categoria"/>
        )
    }
    
    return(
        <div className="container my-5">
            <div className="row">
                    <ItemList items={items}/>
            </div>
        </div>
    )
}
export default ItemListContainer