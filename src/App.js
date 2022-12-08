import logo from './logo.svg';
import './App.css';

function App() {

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

      <input type = "text" placeholder='First line'></input><br/>
      <input type = "text" placeholder='Second line'></input><br/>

      <div>
        <span>Linea 1</span>
        <span>Linea 2</span>
        <img></img>

      </div>
      <button>Exportar</button>
    </div>
  );
}

export default App;
