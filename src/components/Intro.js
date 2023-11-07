
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Portfolio from '../images/Portfolio.jpeg'

export default function Intro(){
    return (
        <section className= "intro-container">
            <Container fluid>
                <Row>
                    <Col md="8">
                        <h1>Jill Henderson</h1>
                    </Col>
                    <Col md="4">
                        <img src={Portfolio} className='profile-photo' alt= 'Jills profile'/>
                    </Col>
                </Row>
            </Container>
            <p>Junior Full Stack Developer | Junior Software Engineer</p>
            <a href="mailto:jillian.bethany.henderson@gmail.com" className='contact-button'>GET IN TOUCH</a>
        </section>
    )
}