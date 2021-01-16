import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store';
import { Provider } from 'react-redux';

/* PAGINAS */
import Login from './view/login';
import Cadastro from './view/cadastro';
import Home from './view/home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/home" component={Home} />
      </Router>
    </Provider>  
  );
}

export default App;
