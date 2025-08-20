
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

// import ComponenteA from './Clase11/ComponenteA';



// const ComponenteB=()=>{
//   const {isDarkMode}=useContext(ThemeContext)
//     return(
//         <>
//           <p className="p-1">Modo oscuro?<b>{isDarkMode?" si":" no"}</b></p>

//         </>
//     )
// }
// const ComponenteA=()=>{
//   const {curso, setCurso}=useContext(ThemeContext)
//     return (
//       <>
//           <p className="p-1">Curso: <b>{curso}</b></p>
//           <button className='btn btn-dark' onClick={()=>setCurso("React JS")}>Modificar Curso</button>
          
//       </>
//     )
// }

function App() {
  // const [isDarkMode,setIsDarkMode]=useState(false)
  // const [curso,setCurso]=useState("Desarrollo web")
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
      {/* <ThemeContext.Provider value={{isDarkMode, curso, setCurso}}>
        <ComponenteB/>
        <ComponenteA/>
        </ThemeContext.Provider> */}
{/*       
      <ThemeContext.Consumer>
      {a=>(
        <p className="p-1">Modo oscuro?<b>{a?" si":" no"}</b></p>
        )}
        </ThemeContext.Consumer> */}
      </ThemeContextProvider>
    </CartContextProvider>
    </>

  )
}

export default App
