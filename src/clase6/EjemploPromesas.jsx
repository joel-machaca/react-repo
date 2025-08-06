const EjemploPromesas=()=>{
    const productos =[
        {id:1, name:"cola Coca Cola Zero 2,25 lts", description:"2do al 30% max 48 Unidades Iguales",precio:3485,stock:10,linea:"cocacola"},
        {id:2, name:"Coca Cola Zero 2,25 lts", description:"2do al 30% max 48 Unidades Iguales",precio:3485,stock:8,linea:"cocacola"},
        {id:3, name:"Pepsi 1,5 lts", description:"2do al 30% max 48 Unidades Iguales",precio:1600,stock:5,linea:"pepsi"},
        {id:4, name:"Pepsi Black 1,5 lts", description:"2do al 30% max 48 Unidades Iguales",precio:1600,stock:4,linea:"pepsi"}
    ]
    const bebidas = (linea)=>{
        return new Promise((res)=>{
            setTimeout(()=>{
                const filtro = linea? productos.filter(item=>item.linea ===linea):productos;
                res(filtro)
            },3000)
        })
    }

    bebidas("cocacola").then(resultado=>{
        console.log(resultado)
    })
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Ejemplo promesas</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default EjemploPromesas