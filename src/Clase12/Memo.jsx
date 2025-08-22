import { memo } from "react"
//componente normal
// const Memo=({item})=>{
//     return(
//         <div className="container my-5">
//             <div className="row shadow-lg p-4 rounded">
//                 <div className="col-md-5 offset-md-1 text-end">
//                     <img src={item.image} alt={item.title} />
//                 </div>
//                 <div className="col-md-5">
//                     <h1 className="fw-bold">{item.title}</h1>
//                     <p>{item.description}</p>
//                     <p className="fw-bold">${item.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


//componente con Memo
const Memo=memo(({item})=>{
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
                </div>
            </div>
        </div>
    )
},(oldProp, newProp)=>oldProp.item.fechaModificacion == newProp.item.fechaModificacion)




export default Memo