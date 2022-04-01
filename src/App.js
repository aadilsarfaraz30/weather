import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { requestSuccessfull } from './redux/action/action';

function App() {
  const arr= ['hi','sgg','sdggd']

  const dispatch = useDispatch(requestSuccessfull)
  dispatch(requestSuccessfull(arr))

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
    </div>
  );
}

export default App;
