import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';

// Illustrations
import hero_illustration from './img/hero-illustration.svg';

// Style
import './.App.sass';

// Components
import Sidebar from './components/Sidebar';
import Frontpage from './components/Frontpage';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="col-10">
            <Route exact path="/" component={Frontpage}></Route>
            <Route path="/my_works" component={Work}></Route>
            {/* <Frontpage /> */}
          </div>
        </div>
          {/* Add new components here *************************************** */}
            <Work/>
            <Contact/>

        <div className="sep-large"></div>
      </div> {/* container-fluid ends */}
      <Footer/>
    </div>
    );
  }
}

export default App;
