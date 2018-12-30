import React, { Component } from 'react';
<<<<<<< HEAD
import { Row, Col } from 'react-bootstrap';

// Illustrations
import hero_illustration from './img/hero-illustration.svg';

// Style 
=======
import { Route } from 'react-router-dom';
//style
>>>>>>> 2c27359268cb61f7bf47b9e00e7ff98a8dedc153
import './.App.sass';

// Components
import Sidebar from './components/Sidebar';
import Frontpage from './components/Frontpage';
import Work from './components/Work';
import Contact from './components/Contact';


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



    <footer className="fixed-bottom">
      links
    </footer>
    </div>
    );
  }
}

export default App;
