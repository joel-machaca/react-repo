import React from 'react';

import Header from './components/header';
import McDonalds from './components/McDonalds';
import Banners from './components/Banner';
import Servicios from './components/Servicios';
import PedirPorApps from './components/PedirPorApps';
import Registrate from './components/registrare';





function App() {
  let curso="Curso de React JS!"
  let alumnos =50;
  return (
    <>
      <Header/>
      <McDonalds/>
      <Banners/>
      <Servicios/>
      <PedirPorApps/>
      <Registrate/>
    </>

  )
}

export default App
