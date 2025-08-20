import { createContext, useState } from "react";
import products from "../../assets/productos.json"

export const CartContext=createContext();
const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([]);

    const addItem=(item,quantity)=>{
        if(isInCart(item.id)){
            
            const product=cart.find(producto=>producto.id==item.id)
            product.quantity += quantity;
            console.log(product)
            setCart([...cart])
        }else{
            const product=products.find(producto=>producto.id==item.id)
            product.quantity = quantity;
            console.log(product)
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

    return<CartContext value={{cart,addItem,removeItem,clear}}>
        {children}
    </CartContext>
}
export default CartContextProvider;