import React from 'react'

const ContactForm = () => {
    return (
        <section id='contact'>

            <div className="contact-inner">
                <h2>Get in touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                <form action="#">
                    <div className='formWrapper'>
                        <label htmlFor="">First Name</label>
                        <input required type="text" placeholder='Enter Your Name' />
                    </div>
                    <div className='formWrapper'>
                        <label htmlFor="">Phone</label>
                        <input required type="phone" placeholder='X-XXX-XXX-XXXX' />
                    </div>
                    <div className='formWrapper'>
                        <label htmlFor="">Email Address</label>
                        <input required type="email" placeholder='user@example.com' />
                    </div>
                    <div className='formWrapper'>
                        <label htmlFor="">Location</label>
                        <input required type="text" placeholder='City...' />
                    </div>
                    <div className='formWrapper'>
                        <label htmlFor="">A Short Message</label>
                        <input required type="text" placeholder='What would you like us to know' />
                    </div>
                    <input className='submit' type="submit" value={'Send Message'} />
                </form>
            </div>
        </section>
    )
}

export default ContactForm
