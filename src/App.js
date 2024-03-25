// import {fishes} from "./components/Fishes/fishes.json"
// import './App.css';
import Fishes from './components/Fishes/Fishes.jsx';

let fishes = require("./components/Fishes/fishes.json");

function App() {
  return (
    <div className="App">
      <Fishes fishes={fishes} />
    </div>
  );
}

export default App;
