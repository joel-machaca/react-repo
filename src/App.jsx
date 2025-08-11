
import McDonalds from './components/McDonalds';
import Banners from './components/Banner';
import Servicios from './components/Servicios';
import PedirPorApps from './components/PedirPorApps';
import Registrate from './components/registrare';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Familia from './components/Familia';
import Productos from './components/Productos';
import PaginaPrincipal from './components/PaginaPrincipal';
import NavBar2 from './components/NavBar2';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/"              element={<PaginaPrincipal/>}/>
          <Route path="/productos"     element={<NavBar2/>}/>
          <Route path="/familia"       element={<Familia/>}/>
          <Route path="/productos/:id"  element={<ItemListContainer/>}/>
          <Route path="/item/:id"      element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  )
}

export default App
