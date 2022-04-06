import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from './components/Navbar';
import Home from './components/Home';
import {Switch,Route, Redirect} from "react-router-dom"
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
      <Route exact path="/cart" component={Cart} />
      <Redirect to="/" />
      </Switch>
      </>
    </div>
  );
}

export default App;
