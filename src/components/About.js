
import { SocialIcon } from 'react-social-icons'
import Carousel from 'react-bootstrap/Carousel'
// import { Tooltip } from 'react-tooltip'

export default function About() {


    return (
        <section className='about-container' id='about'>
            <h1>About Jill</h1>
            <h2>
                Junior Developer | Junior Software Engineer
            </h2>
            <h2>
                Harrogate | Leeds | York
            </h2>
            <a href="mailto:jillian.bethany.henderson@gmail.com" className='email-link'>jillian.bethany.henderson@gmail.com</a>
            <nav>
                <SocialIcon url="https://linkedin.com/in/jill-bmh" className='icons' bgColor='#766A78' style={{ height: 35, width: 35 }} />
                <SocialIcon url="http://github.com/jillbmh" className='icons' bgColor='#766A78' style={{ height: 35, width: 35 }} />
            </nav>
            <p>
                After 17 years working in the social care sector, I have pivoted to the tech world, graduating from the General Assembly Software Engineering Course in October 2023. In my previous role, I tackled complex challenges, honed problem-solving skills, and developed a deep commitment to community well-being. These experiences fuel my passion for using technology to make a positive impact. In the social care sector, I developed a strong passion for accessibility. As a Junior Developer, I'm excited to bring this focus into the tech world by blending my coding skills with my drive to make platforms more user-friendly. I'm excited to grow as a Junior Developer and look forward to contributing to a team that values inclusivity.
            </p>
            {/* <div className="App">
                <Tooltip text="This is a heading!">
                    <h1>Hello World</h1>
                </Tooltip>

                <p>
                    <Tooltip text="this is a sentence">
                        Hover over this text and see for yourself.
                    </Tooltip>
                </p>
            </div> */}
            <div className='icons-container'>
                <i class="devicon-html5-plain skills-icons"></i>
                <i className="devicon-css3-plain skills-icons"></i>
                <i className="devicon-sass-original skills-icons"></i>
                <i className="devicon-javascript-plain skills-icons" ></i>
                <i className="devicon-react-original skills-icons"></i>
                <i className="devicon-bootstrap-plain skills-icons"></i>
                <i className="devicon-nodejs-plain skills-icons"></i>
                <i className="devicon-express-original skills-icons"></i>
                <i className="devicon-mongodb-plain skills-icons"></i>
                <i className="devicon-postgresql-plain skills-icons"></i>
                <i className="devicon-python-plain skills-icons"></i>
                <i className="devicon-django-plain skills-icons"></i>
                <i className="devicon-git-plain skills-icons"></i>
                <i className="devicon-github-original skills-icons"></i>
                <i className="devicon-heroku-original skills-icons"></i>
                <i className="devicon-canva-original skills-icons"></i>
                <i className="devicon-codepen-plain skills-icons"></i>
                <i className="devicon-figma-plain skills-icons"></i>
                <i className="devicon-markdown-original skills-icons"></i>
                <i className="devicon-slack-plain skills-icons"></i>
                <i className="devicon-vscode-plain skills-icons"></i>
            </div>
            <Carousel className="carousel-container" data-bs-theme="light" data-bs-interval="false" >
                <Carousel.Item data-bs-interval="false">
                    <Carousel.Caption>
                        <h3>Software Engineering Immersive</h3>
                        <h4>General Assembly</h4>
                        <h5>July - October 2023</h5>
                        <p>A 12-week, 420-hour intensive bootcamp in full-stack web application building. This was a remote course on zoom, where we met for stand up every day, did online lessons and submitted daily homework. In the 12 weeks we did 4 projects, a game built using JavaScript, an ecommerce store, a recipe sharing website and for my final solo project I created a full stack app with CRUD functionality.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item data-bs-interval="false">
                    <Carousel.Caption>
                        <h3>The Hesley Group</h3>
                        <h4>General Manager</h4>
                        <h5>October 2019 - August 2023</h5>
                        <p>Set up and managed a Residential Service for Adults with Autism, a Learning Disability and challenging behaviours.
                            Management of 50+ staff. Responsibility for HR, finance, Health and Safety, quality, extensive grounds and senior management strategic responsibilities for the organisation.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item data-bs-interval="false">
                    <Carousel.Caption>
                        <h3>Wilf Ward Family Trust</h3>
                        <h4>Regional Manager</h4>
                        <h5>June 2016 - September 2019</h5>
                        <p>Senior, multi-site Manager, managing 100+ staff and 15 homes for adults with a Learning Disability and physical/ mental health problems.
                            Responsibility for quality, HR, Health and Safety, finance, behavioural analysis and response, data analysis (accidents, incidents, near miss reports, complaints, compliments).
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <a href="mailto:jillian.bethany.henderson@gmail.com" className='contact-button'>GET IN TOUCH</a>
        </section>
    )
}