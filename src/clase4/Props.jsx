// opcion#1 => recibiendo un objeto, acceder a las propiedades de ese objeto
// const Props=(props)=>{
//     console.log(props)
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <h1>{props.academia}</h1>
//                     <h3>{props.curso}</h3>
//                     <p>{props.duracion} meses</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

import ParentComponent from "./ParentComponent"

// opcion#1 => recibiendo un objeto, acceder a las propiedades de ese objeto

const Props=({academia,curso,duracion})=>{
    //desestructuring o desestructurar un objeto
    // let bebida={id:1, nombre:"coca cola"}
    // let {nombre}=bebida;
    // console.log(nombre);



    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>propiedades (Props)</h1>
                    <h1>{academia}</h1>
                    <h3>{curso}</h3>
                    <p>Duracion: {duracion} meses</p>
                    <ParentComponent texto ="hola amigos de Youtube"/>
                    <ParentComponent texto ="hola amigos de Youtube2"/>
                    
                </div>
            </div>
        </div>
    )
}
export default Props