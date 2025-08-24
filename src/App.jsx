import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Familia from './components/Familia';
import PaginaPrincipal from './components/PaginaPrincipal';
import NavBar2 from './components/NavBar2';
import ThemeContextProvider from './components/context/ThemeContext';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';





function App() {
  
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
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </ThemeContextProvider>
      </CartContextProvider>
    </>

  )
}

export default App
