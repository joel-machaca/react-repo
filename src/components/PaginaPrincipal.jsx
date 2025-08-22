import Banners from "./Banner"
import ItemListContainer from "./ItemListContainer"

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
            <ItemListContainer/>
        </>
    )
}
export default PaginaPrincipal