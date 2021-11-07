import Navbar from "./Navbar/index";
import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import careers from './Pages/careers';
import ourservices from './Pages/ourservices';
import IncomeTax from './IncomeTax';

class App extends Component {
    render() {
        return (
          <Router>
            <Navbar />
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/ourservices" component={ourservices} />
                <Route path="/careers" component={careers} />
                <Route path="/Contact" component={Contact} />
              </Switch>
            </Router>
         
        );
    }
}

export default App;