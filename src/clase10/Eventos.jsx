import { useEffect, useState } from "react"

const Texto=()=>{
    const redimensionar =()=>{
        console.log("redimensionaste la ventana del navegador!!")
    }
    window.addEventListener('resize',redimensionar)
    useEffect(()=>{
        
        return(()=>{
            console.log("se va a desmontrar la funcion junto al componente texto");
            
            window.removeEventListener('resize',redimensionar)
        })
    })
    return(
        <h2 className="fw-light">Curso de React JS</h2>
    )
}

const Eventos=()=>{
    // const [visible,setVisible]=useState(true)
    const [texto,setTexto]=useState("")
    // const saludar=()=>{
    //     alert("saludar")
    // }
    // window.addEventListener('click',()=>{
    //     console.log("hiciste click en la ventana del navegador")
    // })

    // const ocultarComponente=()=>{
        
    //     setVisible(!visible)
    // }
    // const capturarEvento=(e)=>{
    //     e.preventDefault(); //detiene un Evento
    //     e.stopPropagation(); //detiene la programacion de Eventos
    //     console.log(e.nativeEvent)
    // }

    const capturarTecla=(e)=>{
        const letraIngresada=e.nativeEvent.data;
        const vocales = ["a","e","i","o","u"];
        // const textoFiltrado= vocales.filter(vocal=>vocal !== texto)
        if(!vocales.some(item=>item ==letraIngresada.toLowerCase())){
            setTexto(texto + letraIngresada)
        }

    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    {/* <button onClick={()=>alert("saludar")}className="btn btn-primary">hacer click</button> */}
                    {/* {visible?<Texto/>:""}
                    <button className="btn btn-dark" onClick={ocultarComponente}>Ocultar componente</button> */}
                    {/* <form>
                        <button className="btn btn-dark" onClick={capturarEvento}>capturar evento</button>
                    </form>
                        <input type="text" onInput={capturarEvento} className="form -control my-2"/> */}
                        <h3>Desafio</h3>
                        <input type="text" onChange={capturarTecla} className="form-control my-2" value={texto}/>
                        <p>{texto}</p>
                        
                </div>
            </div>
        </div>
    )
}
export default Eventos