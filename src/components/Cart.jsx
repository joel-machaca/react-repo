import { useContext } from "react";
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart =()=>{
    const {cart,removeItem,clear,totalProductos,sumaProductos,decrementarItem,incrementarItem}=useContext(CartContext);
    if(totalProductos()==0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>No se encontraron Productos en el Carrtio</h1>
                        <Link to={"/"} className="btn btn-warning fw-bold my-2">Ir a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                            <tr>
                                <td colSpan={6}><button className="btn btn-warning" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>

                            <tr>
                                <th>Id</th>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>

                        <tbody>
                            {
                                cart.map(item=>(
                                    <tr key={item.id}>
                                        <td className="fw-bold">{item.id}</td>
                                        <td><img src={item.image} alt={item.title} width="80"/></td>
                                        <td>{item.title}</td>
                                        <td><button className="btn btn-warning btn-sm me-2" onClick={()=>decrementarItem(item.id)}><i class="bi bi-dash-circle"></i></button>x{item.quantity}<button className="btn btn-warning btn-sm ms-2" onClick={()=>{incrementarItem(item.id)}}><i class="bi bi-plus-circle"></i></button></td>
                                        <td>S/{item.price * item.quantity}</td>
                                        <td>S/{item.price}</td>
                                        <td className="text-end"><button className="btn btn-warning btn-sm"><i className="bi bi-trash" onClick={()=>removeItem(item.id)}></i></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={5}>Total a Pagar</td>
                                <td>S/ {sumaProductos()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;