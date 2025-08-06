import { useState } from "react";

const Promesas=()=>{
    const [resultadoPromesaOK, setResultadoPromesaOK]=useState("");

    const [resultadoPromesaError,setResultadoPromesaError]=useState("")
    //LA PROMESA QUEDA PENDIENTE
    // const promesa=new Promise((resolve,reject)=>{
    //     console.log("ejecutando promesa")
    // })
    // console.log(promesa)

    // LA PROMESA QUE SE COMPLETA
    const promesa=new Promise((resolve,reject)=>{
        console.log("ejecutando promesa")
        const numeroAleatorio = Math.round(Math.random());
        console.log(numeroAleatorio)
        if (numeroAleatorio){
            resolve("Nos vemos el sabado a las 21hs")
        }else{
            reject("no, no podemos vernos este sabado")
        }
    });

    //LA PROMESA QUE SE RECHAZA
    // const promesa=new Promise((resolve,reject)=>{
    //     console.log("ejecutando promesa")
    //     reject("no, no podemos vernos este sabado")
    // });

    
    promesa.then((resultado)=>{
        console.log(resultado)
        setResultadoPromesaError("")
        setResultadoPromesaOK(resultado)
    })
    .catch((err)=>{
        setResultadoPromesaOK("")
        setResultadoPromesaError(err)
    })
    .finally(()=>{
        console.log("proceso terminado")
    })
    

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>promesas</h1>
                    {resultadoPromesaOK?<div className="alert alert-success" role="alert">{resultadoPromesaOK}</div>:""}
                    {resultadoPromesaError?<div className="alert alert-danger" role="alert">{resultadoPromesaError}</div>:""}
                    
                </div>
            </div>
        </div>
    )
}
export default Promesas