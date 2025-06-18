// JSX
let texto="Hola a todos!!!"

let precio=2000;
    // let edad=14
    let sexo="m"

const estilo ={
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    marginBottom: "20px"
}

const saludar=()=>{
    alert("Hola Mundo") 
}

const JSX =()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {/* <p>{edad>18?"sos mayor de edad":"sos menor de edad"}</p> */}
                    <p className="display-4">{texto.toUpperCase()}<span>${precio *3}</span></p>
                    <p style= {estilo}>Estamos cursado JavaScript</p>
                    <p style= {{color: "yellow",backgroundColor: "black",padding: "20px",marginBottom: "20px",fontWeight:"bold"}}>Estamos cursado JavaScript</p>
                    <p className="estiloRosa">Estamos cursando JavaScript</p>
                    <p className="estiloRosa">Estamos cursando JavaScript</p>
                    <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">Estamos cursando javascript</div>
                    <div className={`p-3 mb-2 ${sexo ==="m"?"bg-info-subtle":"bg-danger-subtle" } text-primary-emphasis`}>{sexo==="m"?"hombre":"mujer"}</div>
                    <button className="btn btn-primary" onClick={saludar}>hacer click</button>
                </div>
            </div>
        </div>

    )
}

export default JSX