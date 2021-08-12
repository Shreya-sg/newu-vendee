import './App.css';
import './Style.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Bestseller from './pages/Bestseller';
import Sale from './pages/Sale';
import Shop from './pages/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="/newu-vendee">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/bestseller">
            <Bestseller />
          </Route>
         
          <Route exact path="/sale">
            <Sale />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
