import React from 'react';

import Header from './components/header';
import McDonalds from './components/McDonalds';
import Banners from './components/Banner';
import Servicios from './components/Servicios';
import PedirPorApps from './components/PedirPorApps';
import Registrate from './components/registrare';
import Props from './clase4/Props';
import Estados from './clase4/Estados';
import Contador from './clase4/Contador';
import ComponentesPresentacion from './clase4/ComponentesPresentacion';
import ContadorConBoton from './ejerciciosState/ContadorConBoton';
import ContadorConReinicio from './ejerciciosState/contadorConReinicio';
import CambioDeColor from './ejerciciosState/CambioDeColor';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';





function App() {

  return (
    <>
      <NavBar/>
      <McDonalds/>
      <Banners/>
      <Servicios/>
      <PedirPorApps/>
      <Registrate/>
      <ItemListContainer mensaje={"No se encontraron Productos disponibles"}/>


    </>

  )
}

export default App
