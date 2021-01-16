import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* PAGINAS */
import Login from './view/login';
import Cadastro from './view/cadastro';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Router>
  );
}

export default App;
