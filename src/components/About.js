import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import Carousel from 'react-bootstrap/Carousel'

export default function About(){
    return (
        <section className='about-container'>
            <h1>About Jill</h1>
            <h2>
            Junior Developer | Junior Software Engineer | Junior Full Stack Developer 
            </h2>
            <h2>
            Harrogate | Leeds | York
            </h2>
            <p>jillian.bethany.henderson@gmail.com</p>
            <nav>
                <SocialIcon url="https://linkedin.com/in/jill-bmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
                <SocialIcon url="http://github.com/jillbmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
            </nav>
            <p>
            After 17 years working in the social care sector, I have pivoted to the tech world, graduating from the General Assembly Software Engineering Course in October 2023. In my previous role, I tackled complex challenges, honed problem-solving skills, and developed a deep commitment to community well-being. These experiences fuel my passion for using technology to make a positive impact. In the social care sector, I developed a strong passion for accessibility. As a Junior Developer, I'm excited to bring this focus into the tech world by blending my coding skills with my drive to make platforms more user-friendly. I'm excited to grow as a Junior Developer and look forward to contributing to a team that values inclusivity.
            </p>
            <Carousel className="carousel-container" data-bs-theme="dark">
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Link to="/contact" className="contact-button">GET IN TOUCH</Link>
        </section>
    )
}