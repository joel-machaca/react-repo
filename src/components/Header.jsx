import Logo from "./Logo"
import NavBar from "./NavBar"
import Pedir from "./Pedir"

const Header =()=>{
    return(
        <div className="container-fluid headerBackground p-5">
            <div className="row">
                <div className="col">
                    <Logo/>
                    <NavBar/>
                    <Pedir/>
                </div>
            </div>
        </div>
    )
}

export default Header