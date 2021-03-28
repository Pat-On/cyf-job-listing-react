import logo from "./logo.svg";
import svgimg from "./images/eyecam-co.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={svgimg} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
