import React, { Component } from 'react';
import "./ContactForm.css";

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <div className="contact-form-container container">
                  <div className="row contact-form-header">
                     <h3>TALK TO SALES</h3>
                     <h2>Connect with Us to get answer to all Questions.Fill Out the form below</h2>
                  </div>
                  <div className="row">
                  <div className="contact-form-card">
                      <div className="col-md-4 contact-form-card-left">
                        <h2>We’re here to help</h2>
                        <ul>
                            <li>Find the right solution for you</li>
                            <li>Explain options for pricing</li>
                            <li>Connect you with helpful resources</li>
                        </ul>
                         {/* <img className="contact-form-image" src={require("../../images/contact.gif")} /> */}
                      </div>
                      <div className="col-md-8">
                         <div className="contact-form-elements">
                            <input className='contact-card-element' type="text"></input><br/>
                            <input className='contact-card-element' type="text"></input><br/>
                            <input className='contact-card-element' type="text"></input><br/>
                            <input className='contact-card-element' type="text"></input><br/>
                            <input className='contact-card-element' type="text"></input><br/>
                            <input className='contact-card-element' type="text"></input><br/>
                         </div>
                      </div>
                    </div>
                 </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;