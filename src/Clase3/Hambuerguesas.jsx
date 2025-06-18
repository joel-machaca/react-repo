import mcfiesta from "./assets/mcfiesta.png"

const Hamburguesas =()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card border-0 text-center">
                        <img src={"https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar"} className="card-img-top" alt="Hamburquesa"/>
                        <div className="card-body">
                            <p className="card-text">Hamburguesa</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 text-center">
                        <img src={"hamburguesa-con-queso.png"} className="card-img-top" alt="Hamburquesa"/>
                        <div className="card-body">
                            <p className="card-text">Hamburguesa con queso</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 text-center">
                        <img src={mcfiesta} className="card-img-top" alt="MCfiesta"/>
                        <div className="card-body">
                            <p className="card-text">mcfiesta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hamburguesas