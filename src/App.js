import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Hello mate="Muthafucka"/>
      <Container title="To do"/>
    </div>
  );
}

export default App;


/*
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
*/