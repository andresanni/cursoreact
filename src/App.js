import './App.css';
import { useState } from 'react';

function App() {

  const[linea1,setLinea1] =useState("");
  const[linea2,setLinea2] =useState("");
  const[image,setImage]= useState("");

  function onChangeLinea1(evento){ 
    setLinea1(evento.target.value);
  }

  function onChangeLinea2(evento){
    setLinea2(evento.target.value);
  }

  function onChangeImage(evento){
    setImage(evento.target.value);
    
  }



  return (
    <div className="App">
      
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosiraptor</option>
        <option value="smart">Smart guy</option>
      </select>

      <input onChange={onChangeLinea1} type = "text" placeholder='First line'></input>
      <input onChange={onChangeLinea2}type = "text" placeholder='Second line'></input>

      <div id="memeContainer">
        <img src={"/img/"+ image +".jpg"}></img>
        <span id="firstLine">{linea1}</span>
        <span id="secondLine">{linea2}</span>
      </div>

      <button>Exportar</button>
    </div>
  );
}

export default App;
