import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
const ItemListContainer=()=>{
    const [loading,setLoading]=useState(true);
    const [items,setItems]= useState([])
    const {id}=useParams();

    useEffect(()=>{
        const db=getFirestore()
        const itemsCollection=collection(db,"items")
        getDocs(itemsCollection)
        const q= id? query(itemsCollection,(where("categoria","==",id))):itemsCollection;
        getDocs(q)
        .then(snapShot=>{
            if(snapShot.size>0){
                setItems(snapShot.docs.map(item=>({id:item.id,...item.data()})));
                setLoading(false)
            }else{
                console.log("no hay documentos")
            }
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