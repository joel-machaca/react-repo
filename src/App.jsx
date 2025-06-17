
import './App.css'
import Encabezado from './encabezado'
function App() {
  let curso="Curso de React!!!"
  let alumnos =30;
  return (
    <>
      <Encabezado/>
      <h3>{curso}</h3>
      <p>alumnos:{alumnos *2}</p>
      <Encabezado/>
    </>

  )
}

export default App
