import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store';
import { Provider } from 'react-redux';

/* PAGINAS */
import Login from './view/login';
import Cadastro from './view/cadastro';
import Home from './view/home';
import Desafios from './view/desafios';
import Detalhes from './view/detalhes';
import CadastrarTimes from './view/criar-time';
import Profile from './view/profile';
import Perfil from './view/perfil';
import Times from './view/hist-times';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/desafios" component={Perfil} />
        <Route exact path="/hacks" component={Home} />
        <Route path="/detalhes/:id" component={Detalhes} />
        <Route path="/cadastrarTimes/:id" component={CadastrarTimes} />
        <Route exact path="/profile" component={Perfil} />
        <Route exact path="/times/:id" component={Times} />
      </Router>
    </Provider>  
  );
}

export default App;
