import React, { Component } from 'react';


// Illustrations
// import hero_illustration from './img/hero-illustration.svg';

// Style
import './.App.scss';

// Components
import ReactGA from 'react-ga';
import Sidebar from './components/Sidebar';
import Frontpage from './components/Frontpage';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-132564607-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="d-none d-sm-none d-md-none d-lg-block col-2">
            <Sidebar/>
          </div>
          <div className="col-sm-11 col-md-12 col-lg-10">
            <Frontpage />
          </div>
        </div>
          {/* Add new components here *************************************** */}
            <Work/>
            <About/>
            <Contact/>

        <div className="sep-large"></div>
      </div> {/* container-fluid ends */}
      <Footer/>
    </div>
    );
  }
}

export default App;
