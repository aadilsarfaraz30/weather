import logo from './logo.svg';
import './App.css';
import WeatherFromCoordinates from './fetchData/WeatherFromCoordinates';
import WeatherFromCity from './fetchData/WeatherFromCity';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React $ deploy change in dev
        </a>
      </header>
      <WeatherFromCoordinates/>
      <WeatherFromCity/>
    </div>
  );
}

export default App;
