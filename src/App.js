import logo from './logo.svg';
import './App.css';
import { Menu } from './components/navigation';
import Head  from './components/head.js';
import Layout from "./components/layout";

function App() {

    const menu = ["About us" , "Make an appointment" , "Our crew"];
    return (
    <div className="App">
        <Head/>
        <Menu menu={menu}/>
        <Layout/>
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
    </div>
  );
}

export default App;
