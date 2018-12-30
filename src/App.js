import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
            <Route exact path="/" component={Frontpage}></Route>
            <Route path="/my_works" component={Work}></Route>
            {/* <Frontpage /> */}
          </div>
        </div>  {/* row ends */}
        <div className="row">
          <div className="offset-2">
          </div>
          <div className="col-10">
            {/* <Work/> */}
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
