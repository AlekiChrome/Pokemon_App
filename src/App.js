import './App.css';
import NavBar from "./components/NavBar";
import Berries from "./components/Berries";
import Pokemon from "./components/Pokemon"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Berries />
      <Pokemon />
    </div>
  );
}

export default App;
