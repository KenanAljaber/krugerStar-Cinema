import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../styles/contact.css"
const Contact = () =>{
    return(
        <div className='my-5'>
            <h4 className='contact-title'>Ready to connect with us?</h4>
            <div className='contenedor-contact'>
                <Form className='contenedor-form'>
                    <Row>
                        <Col >
                            <h3 className='form-title'>Let’s Connect!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" required/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name"  required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="email" placeholder="Email address" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control as="textarea" type="text" placeholder="Enter text here" required/>
                        </Col>
                    </Row>
                    <Button variant="danger" type="submit">
                        Get in touch
                    </Button>
                </Form>
            </div>
            
        </div>
    )
}
export default Contact;