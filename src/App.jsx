
import McDonalds from './components/McDonalds';
import Banners from './components/Banner';
import Servicios from './components/Servicios';
import PedirPorApps from './components/PedirPorApps';
import Registrate from './components/registrare';
import Props from './clase4/Props';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ParentComponent from './clase4/ParentComponent';
import Estados from './clase4/Estados';
import Contador from './clase4/Contador';
import ComponentesPresentacion from './clase4/ComponentesPresentacion';
import CompChildren from './clase5/CompChildren';
import CompUseRef from './clase5/CompUseRef';
import CompUseEffect from './clase5/CompUseEffect';
import ItemCount from './components/ItemCount';
import Promesas from './clase6/Promesas';
import EjemploPromesas from './clase6/EjemploPromesas';
import Map from './clase6/Map';





function App() {
  return (
    <>
      <NavBar/>
      <McDonalds/>
      <Banners/>
      <Servicios/>
      <PedirPorApps/>
      <Registrate/>
      <ItemListContainer mensaje={"No se encontraron Productos "}/>
      {/* <CompChildren titulo1="CoderHouse" titulo2="curso de ReactJS">
        <h2>Curso de React JS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt, quibusdam nostrum possimus nemo quisquam libero totam, laborum officia accusantium laudantium, suscipit doloremque magnam cumque corrupti non in quos. Nostrum!</p>
        <h3 className='text-white fst-italic fw-bold display-3'>Aprende React en 8 semanas</h3>
        <p>clases en vivo</p>
      </CompChildren> */}
      {/* <CompUseRef/> */}
      {/* <CompUseEffect/>
      <ItemCount productoCantidad={10}/> */}
      {/* <Promesas/> */}
      {/* <EjemploPromesas/> */}
      {/* <Map/> */}
    </>

  )
}

export default App
