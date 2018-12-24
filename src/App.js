import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// illustrations
import hero_illustration from './img/hero-illustration.svg';

//style
import './.App.sass';
import Sidebar from './components/Sidebar';
import Frontpage from './components/Frontpage';
import Work from './components/Work';


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
            <Frontpage />
          </div>

        </div>  {/* row ends */}
        <div className="row">
          <div className="offset-2">
          </div>
          <div className="col-10">
            <Work/>
          </div>
        </div>
      </div>
      
      
    <footer className="fixed-bottom">
      links
    </footer>

    </div>
    );
  }
}

export default App;
