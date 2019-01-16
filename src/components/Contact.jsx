import React, { Component } from 'react';
class Contact extends Component {
    render() {
        return(
            <div className="row img-bg contact-page">
				<div className="offset-2 d-none d-sm-none d-md-none d-lg-block"></div>
				<div className="col-sm-11 col-md-12 col-lg-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section" id="contact">
                                <h1>Contact Me</h1>
                                <p className="description-text">
                                Just say hi at <strong>gmrsagar@gmail.com</strong> or write me a message below and I'll get back to you as soon as possible. 
                                </p>
                                <div className="sep-small"></div>

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