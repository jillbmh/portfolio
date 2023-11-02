import Bluey from '../images/Bluey-Game.png'
import AFJH from '../images/AFJH.png'
import Flavour from '../images/FF- Broken.png'
import Dinner from '../images/Whats for Dinner.png'

export default function Experience(){

  
    return (
      <section className="experience-container">
        <div className='animation-container'>
          <div className='animated-words'>
          - JavaScript - Python - Django
          </div>
        </div>
        <div className="projects-container">
          <article className="project-item">
          <img src={Bluey} alt="Bluey-Game" style={ {height: 120, width: 120} }></img>
          <p>Blueys Obstacle Course</p>
          </article>
          <article className="project-item">
          <img src={AFJH} alt="Bluey-Game" style={ {height: 120, width: 120} }></img>
          <p>AFJH Store</p>
          </article>
          <article className="project-item">
          <img src={Flavour} alt="Bluey-Game" style={ {height: 120, width: 120} }></img>
          <p>Flavour Finder</p>
          </article>
          <article className="project-item">
          <img src={Dinner} alt="Bluey-Game" style={ {height: 120, width: 120} }></img>
          <p>What's for Dinner</p>
          </article>
        </div>
      </section>
    )
  }