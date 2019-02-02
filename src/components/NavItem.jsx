import React from 'react';

const NavItem = props => {
  return (
     <div className="nav-item pb-3">
        <a href="#works"
          onMouseEnter={ () => this.changeNavImage('imgWorks', Icon_work_active) }
          onMouseLeave={ () => this.changeNavImage('imgWorks', Icon_work ) }>
          <div className="nav-icon--holder">
            <img src={ this.state.navImages.imgWorks } alt="" className="nav-icon"/>
          </div>
          <div className="nav-title">My Works</div>
        </a>
      </div>
  )
}

export default NavItem