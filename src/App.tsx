import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponents';
import ButtonPrevious from './components/ButtonPrevious';
import ButtonNext from './components/ButtonNext';

function App() {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <br></br>
    <ButtonPrevious></ButtonPrevious><ButtonNext></ButtonNext>
    </>
  );
}

export default App;
