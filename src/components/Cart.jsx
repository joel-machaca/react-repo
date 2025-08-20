import { useContext } from "react";
import { CartContext } from "./context/CartContext"

const Cart =()=>{
    const {cart}=useContext(CartContext)
    console.log(cart);
    
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        {
                            cart.map(item=>(
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.title} width="80"/></td>
                                    <td>{item.title}</td>
                                    <td>S/{item.price}</td>
                                    <td>X{item.quantity}</td>
                                    <td>S/{item.price * item.quantity}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;