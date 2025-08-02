import { useRef } from "react"

const CompUseRef =()=>{
    // const titulo = document.getElementById("titulo")
    // console.log(titulo)

    const titulo = useRef(null);
    const contenido = useRef(null);

    const modificarTexto=()=>{
        titulo.current.textContent="nuevo Contenido"
    }

    const modificarContenido=()=>{
        contenido.current.innerHTML=`<img src='https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kxXtFAkZ/200/200/original?country=pe' alt='Stacker doble' width='240'/>
        <h1>Stacker Doble</h1>
        <h3>El doble de manija</h3>`
        contenido.current.classList.add("shadow-lg","p-4")
    }
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 id="titulo" ref={titulo}>Titulo Original</h1>
                    <button className="btn btn-dark" onClick={modificarTexto}>Modificar texto</button>
                    <div ref={contenido} className="my-4"></div>
                        <button className="btn btn-secondary" onClick={modificarContenido}>modificar contenido</button>
                </div>
            </div>
        </div>
    )
}

export default CompUseRef