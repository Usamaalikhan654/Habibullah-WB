import React from 'react';



export default function Email() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_dyt8nbj', e.target, 'user_bgqJpE58sM4p2OVzSDoE6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
}