import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const CartContext=createContext();
const CartContextProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const [products,setProducts]=useState([])

    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,"items")

        getDocs(itemsCollection).then(snapShot=>{
            setProducts(snapShot.docs.map(item=>({id:item.id, ...item.data()})))

        });
    },[])

    const addItem=(item,quantity)=>{
        if(isInCart(item.id)){
            
            const product=cart.find(producto=>producto.id==item.id)
            product.quantity += quantity;
            console.log(product)
            setCart([...cart])
        }else{
                
            const product=products.find(prod=>prod.id==item.id)
            product.quantity = quantity;
            setCart([...cart,product])
        }
    }

    const removeItem=(id)=>{
        const productsFilter=cart.filter(item=>item.id != id)
        setCart(productsFilter)
    }

    const clear =()=>{
        setCart([]);
    }

    const isInCart=(id)=>{
        return cart.some(item=>item.id==id) //some devuelve true si encuentra lo pedido en este caso el id 2 , si no encuentra nos dara false
    }

    const totalProductos=()=>{
        return cart.reduce((acc,item)=>acc += item.quantity, 0)
    }
    const sumaProductos=()=>{
        return cart.reduce((acc,item)=>acc += item.price*item.quantity, 0)
    }
    const decrementarItem=(id)=>{

        const product=cart.find(producto=>producto.id==id)
        if(product.quantity >1){
            product.quantity -= 1;
            setCart([...cart])
        }else{
            removeItem(id)
        }
    }
    const incrementarItem=(id,stock)=>{
            const product=cart.find(producto=>producto.id==id)
            if(product.quantity<stock){
                product.quantity += 1;
                setCart([...cart])
            }

    }
    return<CartContext.Provider value={{cart,addItem,removeItem,clear ,totalProductos,sumaProductos,incrementarItem,decrementarItem}}>
        {children}
    </CartContext.Provider>
}
export default CartContextProvider;