
import McDonalds from './components/McDonalds';
import Banners from './components/Banner';
import Servicios from './components/Servicios';
import PedirPorApps from './components/PedirPorApps';
import Registrate from './components/registrare';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Map from './clase6/Map';
import Fetch from './clase7/Fetch';
import PokemonAPI from './clase7/PokemonAPI';
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  return (
    <>
      <NavBar/>
      <McDonalds/>
      <Banners/>
      <Servicios/>
      <PedirPorApps/>
      <Registrate/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>

  )
}

export default App
