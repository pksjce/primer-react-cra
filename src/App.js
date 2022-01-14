import logo from './logo.svg';
import './App.css';
import {IconButton} from '@primer/react/drafts'
import {SearchIcon} from '@primer/octicons-react'

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
          Learn React
        </a>
        <IconButton icon={SearchIcon}>Icon</IconButton>
      </header>
    </div>
  );
}

export default App;
