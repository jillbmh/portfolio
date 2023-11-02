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
            
            <i class="devicon-html5-plain skills-icons"></i>
            <i class="devicon-css3-plain skills-icons"></i>
            <i class="devicon-sass-original skills-icons"></i>
            <i class="devicon-javascript-plain skills-icons" ></i>
            <i class="devicon-react-original skills-icons"></i>
            <i class="devicon-bootstrap-plain skills-icons"></i>
            <i class="devicon-nodejs-plain skills-icons"></i>
            <i class="devicon-express-original skills-icons"></i>
            <i class="devicon-mongodb-plain skills-icons"></i>
            <i class="devicon-postgresql-plain skills-icons"></i>
            <i class="devicon-python-plain skills-icons"></i>
            <i class="devicon-django-plain skills-icons"></i>
            <i class="devicon-git-plain skills-icons"></i>
            <i class="devicon-github-original skills-icons"></i>
            <i class="devicon-heroku-original skills-icons"></i>
            <i class="devicon-canva-original skills-icons"></i>
            <i class="devicon-codepen-plain skills-icons"></i>
            <i class="devicon-figma-plain skills-icons"></i>
            <i class="devicon-markdown-original skills-icons"></i>
            <i class="devicon-slack-plain skills-icons"></i>
            <i class="devicon-vscode-plain skills-icons"></i>
            <Carousel className="carousel-container" data-bs-theme="light">
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Software Engineering Immersive | General Assembly | July - October 2023</h3>
                        <p>A 12-week, 420-hour intensive bootcamp in full-stack web application building. 

What’s for Dinner- This was a 10-day project where I created a full-stack app with a React front end and Django Rest Framework back end. It is an app for people with a Learning Disability and their carers to support people to gain independence in choosing their meals.

Flavour Finder- This was an 8 day MERN stack, 3 person group project. We made a recipe-sharing website with CRUD functionality.

AFJH Store- This was a pair project. In 2 days we created a basic ecommerce site consuming a third party API.

Blueys Obstacle Course- This was a 7-day solo project where I re-created the classic arcade game Frogger, taking inspiration from my youngest daughter's favourite TV show, Bluey.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>The Hesley Group | General Manager | October 2019 - August 2023</h3>
                        <p>Set up and managed a Residential Service for Adults with Autism, a Learning Disability and challenging behaviours. Moved vulnerable people from secure settings into the community and achieved great outcomes for those individuals.
Management of 50+ staff, including management of a multi disciplinary clinical team. 
Responsibility for HR, finance, Health and Safety, quality, extensive grounds and senior management strategic responsibilities for the organisation.
</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Wilf Ward Family Trust | Regional Manager | June 2016 - September 2019</h3>
                        <p>Senior, multi-site Manager, managing 100+ staff and 15 homes for adults with a Learning Disability and physical/ mental health problems. 
Responsibility for quality, HR, Health and Safety, finance, behavioural analysis and response, data analysis (accidents, incidents, near miss reports, complaints, compliments).
</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Link to="/contact" className="contact-button">GET IN TOUCH</Link>
        </section>
    )
}