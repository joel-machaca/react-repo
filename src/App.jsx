
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
import Eventos from './clase10/Eventos';
import ItemDetail from './clase10/ItemDetail';
import Abstraccion1 from './clase10/Abstraccion1';
import Abstraccion2 from './clase10/Abstraccion2';
import ThemeContextProvider from './components/context/ThemeContext';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Rendering from './Clase12/Rendering';
import Rendering2 from './Clase12/Rendering2';
import Loading from './components/Loading';
import Rendering3 from './Clase12/Rendering3';
import Memo from './Clase12/Memo';


function App() {
  
  // const producto=  {
  //   "id": 8,
  //   "title": "Coca Cola Grande",
  //   "description": "Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea. Elegila en tamaño regular, mediano o grande.",
  //   "price": 6000,
  //   "image": "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcXf3XY0/200/200/original?country=ar",
  //   "category": "bebidas",
  //   "stock":10,
  //   fechaModificacion:"24-04-2025"
  // }

  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/"              element={<PaginaPrincipal/>}/>
              <Route path="/productos"     element={<NavBar2/>}/>
              <Route path="/familia"       element={<Familia/>}/>
              <Route path="/productos/:id"  element={<ItemListContainer/>}/>
              <Route path="/item/:id"      element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
            {/* <Rendering3 modoDark={true} clase={"text-white"}/> */}
            {/* <Memo item={producto}/> */}
        </ThemeContextProvider>
      </CartContextProvider>
    </>

  )
}

export default App
