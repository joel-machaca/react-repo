import { NavLink } from "react-router-dom"

const Productos=()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-2 offset-md-2 text-center">
                    <NavLink to={"/productos/hamburguesas"} className="text-decoration-none text-dark">
                        <img src="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar" alt="" className="img-fluid"/>
                        <p>Hambuerguesas</p>
                    </NavLink>
                </div>
                <div className="col-2 text-center">
                    <NavLink to={"/productos/pollo"} className="text-decoration-none text-dark">
                        <img src="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar" alt="" className="img-fluid"/>
                        <p>Sandwiches de Pollo</p>
                    </NavLink>
                </div>
                <div className="col-2 text-center">
                    <NavLink to={"/productos/papas"} className="text-decoration-none text-dark">
                        <img src="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar" alt="" className="img-fluid"/>
                        <p>Papas Fritas</p>
                    </NavLink>
                </div>
                <div className="col-2 text-center">
                    <NavLink to={"/productos/bebidas"} className="text-decoration-none text-dark">
                        <img src="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar" alt="" className="img-fluid"/>
                        <p>Bebidas</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Productos