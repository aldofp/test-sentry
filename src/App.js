import logo from './logo.svg';
import './App.css';

function App() {
  function methodDoesNotExist() {
    throw new Error('error');
  }
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
          Learn React
        </a>
      </header>
      <button onClick={methodDoesNotExist}>Break the world</button>;
    </div>
  );
}

export default App;
