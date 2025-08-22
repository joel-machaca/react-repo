import { NavLink } from "react-router-dom"
import CardWidgets from "./CardWidgets"
import Logo from "./Logo"
import Productos from "./Productos"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"



const NavBar=()=>{
    const {isDarkMode,setIsDarkMode}=useContext(ThemeContext)
    
    return(
        <>
            <div className="container-fluid headerBackground p-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-1">
                            <Logo/>
                        </div>
                        <div className="col-md-10 d-flex align-items-center">
                            <ul className="nav ">
                                <li className="nav-item ">
                                    <NavLink className={`nav-link ${isDarkMode?"text-dark":"text-white"}`} to={"/productos"}>Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isDarkMode?"text-dark":"text-white"}`} to={"/productos/hamburguesas"}>hamburguesas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isDarkMode?"text-dark":"text-white"}`} to={"/productos/pollo"}>pollo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isDarkMode?"text-dark":"text-white"}`} to={"/productos/papas"}>papas fritas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${isDarkMode?"text-dark":"text-white"}`} to={"/productos/bebidas"}>bebidas</NavLink>
                                </li>
                            </ul>
                            <div className="form-check form-switch ">
                                <input className="form-check-input " type="checkbox" role="switch" onChange={()=>{setIsDarkMode(isDarkMode?false:true)}} checked={isDarkMode?"checked":""}/>
                                <label className={`form-check-label ${isDarkMode?"text-dark":"text-white"}`} htmlFor="switchCheckChecked">Modo Oscuro</label>
                            </div>
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