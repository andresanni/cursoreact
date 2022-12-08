import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[linea1,setLinea1] =useState("");
  const[linea2,setLinea2] =useState("");

  const onChangeLinea1= function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeLinea2= function(evento){
    setLinea2(evento.target.value);
  }



  return (
    <div className="App">
      
      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosiraptor">Philosiraptor</option>
        <option value="smart">Smart guy</option>
      </select><br/>

      <input onChange={onChangeLinea1} type = "text" placeholder='First line'></input><br/>
      <input onChange={onChangeLinea2}type = "text" placeholder='Second line'></input><br/>

      <div>
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img></img>

      </div>
      <button>Exportar</button>
    </div>
  );
}

export default App;
