import React from 'react';

function Contact() {
    return (
        <form>
            <h2>Leave A Message</h2>
            <div id="contactLabel"><label>Enter your name: 
                <input type="text" id="name"/>
            </label></div>
            <div id="contactLabel"><label>Enter your email address: 
                <input type="text" id="mailAddress"/>
            </label></div>
            <div id="contactLabel"><label>Message: 
                <textarea id="message"/>
            </label></div>
        </form>
      );
}

export default Contact;