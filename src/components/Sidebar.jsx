import React, { Component } from 'react';
import { AutoAffix } from 'react-overlays'

// sidebar-icons
import Icon_home_active from '../img/home_active.svg';
import Icon_home from '../img/home.svg';
import Icon_work_active from '../img/work_active.svg';
import Icon_work from '../img/work.svg';
import Icon_about_active from '../img/about_active.svg';
import Icon_about from '../img/about.svg';
import Icon_contact_active from '../img/contact_active.svg';
import Icon_contact from '../img/contact.svg';

class Sidebar extends Component {
    render() {
        return (
            <AutoAffix>
          <div className="sidebar pl-4">
            <div className="App-logo--holder">
            <div className="App-logo">SG</div>
            </div>
            {/*
              * Navigation
              */}
            <div className="nav">
              <div className="nav-item pb-3 active">
                <div className="nav-icon--holder">
                <img src={ Icon_home_active } alt="Home" className="nav-icon"/>
                </div>
                <div className="nav-title">Home</div>
              </div>
              <div className="nav-item pb-3">
                <div className="nav-icon--holder">
                <img src={ Icon_work } alt="" className="nav-icon"/>
                </div>
                <div className="nav-title">My Works</div>
              </div>
              <div className="nav-item pb-3">
                <div className="nav-icon--holder">
                <img src={ Icon_about } alt="" className="nav-icon"/>
                </div>
                <div className="nav-title">About Me</div>
              </div>
              <div className="nav-item pb-3">
                <div className="nav-icon--holder">
                <img src={ Icon_contact } alt="" className="nav-icon"/>
                </div>
                <div className="nav-title">Contact Me</div>
              </div>
            </div>

          </div>
          </AutoAffix>
        )
    }
}

export default Sidebar;