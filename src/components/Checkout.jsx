import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import SinProductos from "./SinProductos"

const Checkout=()=>{
    const {cart,clear,totalProductos,sumaProductos}=useContext(CartContext)
    const [nombre,setNombre]=useState("")
    const [email,setEmail]=useState("")
    const [telefono,setTelefono]=useState("")
    const [orderId,setOrderId]=useState("")
    const vaciarForm=()=>{
        setNombre("");
        setEmail("");
        setTelefono("");
        clear()
    }

    const generarOrden=()=>{
        const buyer={name:nombre,phone:telefono,email:email}
        
        const items=cart.map(item=>({id:item.id, title:item.title,price:item.price,quantity:item.quantity}))
        const fecha=new Date();
        const fechaActual=`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`

        const order={buyer,items,date:fechaActual,total:sumaProductos()}
        // console.log(order)
        const db=getFirestore();
        const ordersCollection=collection(db,"orders");

        //Insertar un Documento
        // addDoc(ordersCollection,order).then(snapShot=>{
        //     setOrderId(snapShot.id)
        //     vaciarForm()
        // })

        //modificar un Documento
        // const docRef=doc(db,"orders","ONlRwrUz4e72ECizgjJi");
        // let document;
        // getDoc(docRef).then(snapShot=>{
        //     document={...snapShot.data()}
        //     updateDoc(docRef,{stock:(document.stock - 1)}).then(snapShot=>{
        //         console.log(snapShot)
        //     })
        // })

        //actualizar documentos en lote
        // const batch=writeBatch(db)
        // const docRef1=doc(db,"orders","TCMgufxNOGscKpr3nkOn");
        // const docRef2=doc(db,"orders","YnDwkxyxMHWYSqw2AJFk");
        // const docRef3=doc(db,"orders","jVIRptfboEeE283zF5rn");
        // batch.update(docRef1,{fecha:"30-04-2025 09:27"})
        // batch.update(docRef2,{fecha:"30-04-2025 09:27"})
        // batch.set(docRef3,{fecha:"30-04-2025 09:27"})
        // batch.commit()
        // console.log("proceso terminado");
        

        //insertar un nuevo documento en order y actualizar los stock en items
        addDoc(ordersCollection,order).then(snapShot=>{
            setOrderId(snapShot.id)
            vaciarForm()
        })
        for (const item of items) {
            const docRef =doc(db,"items",item.id);
            getDoc(docRef).then(snapShot=>{
                let document={...snapShot.data()}
                updateDoc(docRef,{stock:(document.stock-item.quantity)})
            })
        }

    }

    if(orderId){
        return(
            <div className="row my-5">
                <div className="col text-center">
                    {orderId &&<div class="alert alert-warning text-center" role="alert">
                        <h1>Gracias por tu compra</h1>
                        <h3>Tu numero de compra es: <b>{orderId}</b></h3>
                    </div>}
                </div>
            </div>
        )
    }

    if(totalProductos()==0){
        return <SinProductos/>
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e)=>setNombre(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Telefono</label>
                            <input type="text" className="form-control" value={telefono} onInput={(e)=>setTelefono(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Order</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table text-center">

                            <tr>
                                <th className="px-3">Imagen</th>
                                <th className="px-3">Producto</th>
                                <th className="px-3">Cantidad</th>
                                <th className="px-3">Precio</th>
                                <th className="px-3">Total</th>
                            </tr>

                        <tbody>
                            {
                                cart.map(item=>(
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.title} width="80"/></td>
                                        <td>{item.title}</td>
                                        <td>S/{item.price}</td>
                                        <td>S/{item.quantity}</td>
                                        <td>S/{item.price*item.quantity}</td>
                                    </tr>
                                ))
                            }
                            <tr className="table-secondary">
                                <td colSpan={4}>Total a Pagar</td>
                                <td className="fw-bold">S/ {sumaProductos()}</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId &&<div class="alert alert-warning text-center" role="alert">
                        <h1>Gracias por tu compra</h1>
                        <h3>Tu numero de compra es: <b>{orderId}</b></h3>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default Checkout;