import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className="d-none d-sm-none d-md-block fixed-bottom"> {/* hide fixed bottom for small ---needs fix--- */}
                <div className="float-right">
                    Copyright © 2018, Sagar Ghimire
                </div>
            </footer>
        );
    }
}

export default Footer;