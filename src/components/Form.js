import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'
// import { PhoneCall } from 'react-bootstrap-icons'

function ContactForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Submit form data to server or other API

        // Clear form values after submission
        setFormValues({
            name: '',
            email: '',
            message: ''
        })
        alert('Thank you for connect with us')
    }

    return (
        <Wrap>
            <div className="contact-text">
                <h2>Contact Us</h2>
                <p>
                    Our customer service team is always happy to hear from you.
                </p>
                <p>
                    You may find all the help you need by following the links
                    below or get in touch with us.
                </p>
                <h6>
                    Please note: Customer Service will be unavailable on the
                    following days: Saturday & Sunday
                </h6>
            </div>
            <div className="contact-accordian">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Call Us</Accordion.Header>
                        <Accordion.Body>
                            Up for a chat? Feel free to call us on 0123456789
                            and the friendly voice on the other end of the phone
                            will give you a helping hand with any questions you
                            might have. Please note, phone lines are only open
                            during office hours.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Email Us</Accordion.Header>
                        <Accordion.Body>
                            Get in touch via our email, helpdesk@TimeZen.com,
                            any time of the day or night and our customer
                            support team will give you a bell back during office
                            hours. We endeavour to get back to you within 48
                            hours (not including weekends and bank holidays),
                            but please note there may be a delay during peak
                            times!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Chat to Us</Accordion.Header>
                        <Accordion.Body>
                            Drop a member of our customer support team a line
                            via our live chat function right here on our
                            website. Simply click the 'Chat' pop up in the
                            corner of your screen and our team will be happy to
                            help you with any queries you might have. Please
                            note, live chat is only available during office
                            hours.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Connect with Us</Accordion.Header>
                        <Accordion.Body>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formValues.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button className="contact-btn" type="submit">
                                    Submit
                                </button>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Wrap>
    )
}

export default ContactForm
const Wrap = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    & input {
        margin: 4px;
    }

    & .contact-btn {
        background-color: rgb(18, 107, 143);
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        margin: auto;
    }
    .contact-text {
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
        padding: 20px 0;
        background-color: #04b995;
        color: white;
        margin-top: 3%;
    }
    & .contact-accordian {
        padding-top: 40px;
        max-width: 1200px;
        padding-bottom: 40px;
        margin: 0 auto;
    }
`
