import React, { useRef, useState } from 'react'
import shapeBG from '../media/bg-contact.jpg'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [formValues, setFormValues] = useState({
        user_name: '',
        from_name: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };

    const sendEmail = (e) => {
      e.preventDefault();
        // Basic form validation
        if (!formValues.user_name || !formValues.from_name || !formValues.subject || !formValues.phone || !formValues.message) {
            // Display an error message or handle validation error in your desired way
            alert("Please fill in all the fields");
            return;
        }
      emailjs.sendForm('service_aty9uar', 'template_o86ci6t', form.current, 'UpI4g_8j7u3imczcb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        // Reset form values
        setFormValues({
            user_name: '',
            from_name: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

  return (
    <div className='section section-contact bg-gray' id="contact" style={{backgroundImage: `url(${shapeBG})`}}>
        <div className='container'>
            <div className='section-contact__content'>
                <div className='section__head'>
                    <h3>Feel free to contact <br /> with us any time</h3>
                </div>
                <div className='section__body'>
                    <p>Consectetur notted adipi sicing elit sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua lonm andhn notted adi sicing simply</p>
                </div>
            </div>
            <div className='section-contact__form'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='field-grid'>
                        <input type="text" value={formValues.user_name} onChange={handleChange} name="user_name" placeholder='Your Name' />
                        <input type="email" value={formValues.from_name} onChange={handleChange} name="from_name" placeholder='Enter Email' />
                        <input type="text" value={formValues.subject} onChange={handleChange} name="subject" placeholder='Subject' />
                        <input type="tel" value={formValues.phone} onChange={handleChange} name="phone" placeholder='Phone' />
                        <textarea name="message" value={formValues.message} onChange={handleChange} placeholder='Message' rows={4} cols={2} />
                    </div>
                    <input type="submit" value="Send Message" className='btn btn-submit' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact

