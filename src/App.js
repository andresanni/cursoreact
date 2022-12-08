import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas'

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

  function onClickExport(evento){
    html2canvas(document.querySelector("#memeContainer")).then(canvas => {
    
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">
      
      <div id="menu">
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
      
        <button onClick={onClickExport}>Exportar</button>
      </div>
      
      <div id="memeContainer">
        <img src={"/img/"+ image +".jpg"}></img>
        <span id="firstLine">{linea1}</span>
        <span id="secondLine">{linea2}</span>
      </div>

    </div>
  );
}

export default App;
