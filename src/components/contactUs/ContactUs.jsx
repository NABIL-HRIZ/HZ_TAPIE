import React from 'react'
import './contactUs.css'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHourglass } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const ContactUs = () => {
    return (
        <div id='contactUs' className='contactUs'>
            <h2>Ne Pas Hésiter A Nous <span>Contacter</span></h2>
            <div className='contact_container'>
                <div className='left_c'>
                    <Form action='https://formspree.io/f/xeqynzok' method='post'>
                        <h5>Contactez-nous pour toute question ou demande. Nous sommes là pour vous aider</h5>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control className='input' type="text" placeholder="Nom Complet" name='nom' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control className='input' type="email" placeholder="Votre Email" name='email' />
                            </Form.Group>


                        </Row>

                        <Form.Group>
                            <Form.Control className='textarea' as="textarea" aria-label="With textarea" placeholder='Votre Message' style={{ height: "200px" }} name='message' />
                        </Form.Group>

                        <Button className='button' type="submit" value="send">
                            Envoyer
                        </Button>
                    </Form>



                </div>
                <div className='right_c'>
                    <div className='phone'>
                        <p><span><FaPhoneAlt /></span>   +212567876534 </p>
                    </div>
                    <div className='hour'>
                        <p><span><FaHourglass /></span> 7j/7j , 9h-21h </p>
                    </div>
                    <div className='local'>
                        <p> <span><FaLocationArrow /></span>Hay Salama 3 Gr 3 Bloc B N 19 , Casablanca   </p>
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106414.84068051544!2d-7.5890688!3d33.541324800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1714587018236!5m2!1sfr!2sma" style={{ width: '400px', height: '300px', border: '0', borderRadius: '20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                    </div>




                </div>

            </div>

        </div>
    )
}

export default ContactUs
