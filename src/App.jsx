import React from 'react';
// import logo from './logo.svg';
// import axios from 'axios';
import './App.css';
import Card from './components/Card';
import {datosApi} from './datos';

function App() {

  const onClick=(name)=>{
    alert(`Hice click con el nombre ${name}`);
  }

  return (
    <div>
      <h1>Practice App</h1>
      {
        datosApi.map(persona=>(
            <Card datos={persona} funcion={onClick}/>
        ))
      }
    </div>
  );
}

export default App;
