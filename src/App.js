import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Aprendiendo REACT</h1>
      </div>
      <Testimonio
        nombre='Darwin'
        imagen='darwin'
        cargo='Personaje de Ficcion'
        empresa='Cartoon Network'
        testimonio='Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III es uno de los personajes principales de El Increíble Mundo de Gumball. Él solía ser una mascota de Gumball, pero un día a él le creció piernas, ganó la capacidad de hablar, y en general se adaptó a estar fuera del agua'/>
      <Testimonio 
      nombre='Jesus'
      imagen='bart'
      cargo='Personaje de Ficcion'
      empresa='Cartoon Network'
      testimonio='Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III es uno de los personajes principales de El Increíble Mundo de Gumball. Él solía ser una mascota de Gumball, pero un día a él le creció piernas, ganó la capacidad de hablar, y en general se adaptó a estar fuera del agua'/>
      <Testimonio
      nombre='Charris'
      imagen='tortuga'
      cargo='Personaje de Ficcion'
      empresa='Cartoon Network'
      testimonio='Darwin Raglan Caspian Ahab Poseidon Nicodemius Watterson III es uno de los personajes principales de El Increíble Mundo de Gumball. Él solía ser una mascota de Gumball, pero un día a él le creció piernas, ganó la capacidad de hablar, y en general se adaptó a estar fuera del agua'/>
    </div>
  );
}
export default App;
