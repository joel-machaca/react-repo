import Banners from "./Banner"

import McDonalds from "./McDonalds"
import PedirPorApps from "./PedirPorApps"
import Registrate from "./registrare"
import Servicios from "./Servicios"

const PaginaPrincipal =()=>{
    return(
        <>
            <McDonalds/>
            <Banners/>
            <Servicios/>
            <PedirPorApps/>
            <Registrate/>
        </>
    )
}
export default PaginaPrincipal