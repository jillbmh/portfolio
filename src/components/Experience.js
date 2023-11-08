import Bluey from '../images/Bluey-Game.png'
import AFJH from '../images/AFJH.png'
import Flavour from '../images/flavour-finder-home-page.png'
import Dinner from '../images/Whats for Dinner.png'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Experience() {
  const [showBluey, setShowBluey] = useState(false)
  const [showAFJH, setShowAFJH] = useState(false)
  const [showFF, setShowFF] = useState(false)
  const [showWFD, setShowWFD] = useState(false)

  const handleCloseBluey = () => setShowBluey(false)
  const handleCloseAFJH = () =>setShowAFJH(false)
  const handleCloseFF = () =>setShowFF(false)
  const handleCloseWFD = () =>setShowWFD(false)

  const handleShowBluey = () => setShowBluey(true)
  const handleShowAFJH = () => setShowAFJH(true)
  const handleShowFF = () => setShowFF(true)
  const handleShowWFD = () => setShowWFD(true)

  return (
    <section className="experience-container" id='projects'>
      <div className='animation-container'>
        <div className='animated-words'>
          JavaScript - Python - Django - MongoDB - React
        </div>
      </div>
      <div className="projects-container">
        <article className="project-item">
          <img src={Bluey} alt="Bluey-Game" style={{ height: 120, width: 120 }}></img>
          <Link className='project-buttons' onClick={handleShowBluey}>Blueys Obstacle Course</Link>
          <Modal show={showBluey} onHide={handleCloseBluey}>
            <Modal.Header closeButton>
              <Modal.Title>Blueys Obstacle Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>This was a 7-day solo project where I re-created the classic arcade game Frogger, taking inspiration from my youngest daughter's favourite TV show, Bluey.
            </Modal.Body>
            <Modal.Footer>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseBluey}>
                <Link to= "https://github.com/jillbmh/Blueys-Obstacle-Course" target="_blank" className="link-text">View on GitHub</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseBluey}>
                <Link to="https://jillbmh.github.io/Blueys-Obstacle-Course/" target="_blank" className="link-text">Play</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseBluey}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </article>
        <article className="project-item">
          <img src={AFJH} alt="AFJH Store" style={{ height: 120, width: 120 }}></img>
          <Link className='project-buttons' onClick={handleShowAFJH}>AFJH Store</Link>
          <Modal show={showAFJH} onHide={handleCloseAFJH}>
            <Modal.Header closeButton>
              <Modal.Title>AFJH Store</Modal.Title>
            </Modal.Header>
            <Modal.Body>This was a pair project. In 2 days we created a basic ecommerce site consuming a third party API.
            </Modal.Body>
            <Modal.Footer>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseAFJH}>
                <Link to= "https://github.com/jillbmh/afjh-store" target="_blank" className="link-text">View on GitHub</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseAFJH}>
                <Link to= "https://64f5fc719369b4070a913fcd--jhaf-store.netlify.app/" target="_blank" className="link-text">Visit the Store</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseAFJH}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </article>
        <article className="project-item">
          <img src={Flavour} alt="Flavour Finder" style={{ height: 120, width: 120 }}></img>
          <Link className='project-buttons' onClick={handleShowFF}>Flavour Finder</Link >
          <Modal show={showFF} onHide={handleCloseFF}>
            <Modal.Header closeButton>
              <Modal.Title>Flavour Finder</Modal.Title>
            </Modal.Header>
            <Modal.Body> This was an 8 day MERN stack, 3 person group project. We made a recipe-sharing website with CRUD functionality.
            </Modal.Body>
            <Modal.Footer>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseFF}>
                <Link to="https://github.com/jillbmh/flavour-finder" target="_blank" className="link-text">View on GitHub</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseFF}>
                <Link to="https://flavour-finder-8b73448b0764.herokuapp.com/" target="_blank" className="link-text">Visit the Site</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseFF}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </article>
        <article className="project-item">
          <img src={Dinner} alt="Whats for Dinner" style={{ height: 120, width: 120 }}></img>
          <Link className='project-buttons' onClick={handleShowWFD}>What's for Dinner</Link>
          <Modal show={showWFD} onHide={handleCloseWFD}>
            <Modal.Header closeButton>
              <Modal.Title>What's for Dinner</Modal.Title>
            </Modal.Header>
            <Modal.Body> This was a 10-day project where I created a full-stack app with a React front end and Django Rest Framework back end. It is an app for people with a Learning Disability and their carers to support people to gain independence in choosing their meals.
            </Modal.Body>
            <Modal.Footer>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseWFD}>
                <Link to="https://github.com/jillbmh/whats-for-dinner" target="_blank" className="link-text">View on GitHub</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseWFD}>
                <Link to="https://whats-for-dinner-jbmh-667af0679eab.herokuapp.com/"  target="_blank" className="link-text">Visit the Site</Link>
              </Button>
              <Button className="project-buttons"
                variant="secondary" onClick={handleCloseWFD}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </article>
      </div>
    </section>
  )
}