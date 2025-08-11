import { NavLink } from "react-router-dom"
import CardWidgets from "./CardWidgets"
import Logo from "./Logo"
import Productos from "./Productos"

const NavBar=()=>{
    return(
        <>
            <div className="container-fluid headerBackground p-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-1">
                            <Logo/>
                        </div>
                        <div className="col-md-10">
                            <ul className="nav ">
                                <li className="nav-item ">
                                    <NavLink className="nav-link text-white " to={"/productos"}>Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to={"/category/hamburguesas"}>hamburguesas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to={"/category/pollo"}>pollo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to={"/category/papas"}>papas fritas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to={"/category/bebidas"}>bebidas</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 text-end">
                            <CardWidgets/>
                        </div>
                    </div>
                </div>
            </div>
            <Productos/>
        </>

    )
}





export default NavBar