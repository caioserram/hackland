import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* PAGINAS */
import Login from './view/login';
import Cadastro from './view/cadastro';
import Home from './view/home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
