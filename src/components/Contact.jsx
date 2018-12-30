import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="row">
				<div className="offset-2"></div>
				<div className="col-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section">
                                <h1>Contact Me</h1>
                                <p className="description-text">
                                Looking to work together? Just say hi or tell me a bit about  your project and I'll get back to you. 
                                </p>
                                <div className="sep-medium"></div>

                                <form className="contact-form">
                                    <label class="message" htmlFor="message-input">Your Message</label>
                                    <textarea class="message-input" type="text" placeholder="Please write your message here"/>
                                    <div className="sep-small"></div>

                                    <label class="message-name" htmlFor="message-name">Your Name</label>
                                    <input class="message-name" type="text" placeholder="Your Name"/>
                                    <div className="sep-small"></div>

                                    <label class="message-email" htmlFor="message-email">Your Email</label>
                                    <input class="message-email" type="email" placeholder="your@email.com"/>
                                    <div className="sep-medium"></div>

                                    <div className="button--container">
                                        <div className="button button-primary">Send Message</div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
}

export default Contact;