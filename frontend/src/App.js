import './App.css';
import Home from './components/home/Home';
import {BrowserRoute as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home/>
     <h1>Hello World !</h1>
    </div>
  );
}

export default App;