const Caja=(props)=>{
    return(
        <>
            <p className="fw-light">{props.modalidad}</p>
            <h2>{props.titulo}</h2>
            <div className="my-5">
                {props.children}
            </div>
        </>
    )

}

const Boton=({texto})=>{
    return(
        <button className="btn btn-warning mx-3">{texto}</button>
    )
}



const Children =()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Children Props</h1>
                    <Caja modalidad="coderCamp IA" titulo="Curso de IA">
                        <p>Aprende lo ultimo  en ia y tecnologia con clases en vivo</p>
                        <Boton texto="Inscribete ahora"></Boton>
                        <Boton texto="Inscribete ya!"></Boton>
                    </Caja>
                </div>
            </div>
        </div>
    )
}
export default Children