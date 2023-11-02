import { SocialIcon } from "react-social-icons"
import Dom from '../images/DOM.png'
import Chess from '../images/CHESS.png'

export default function Interests(){
    return (
      <section className="interests-container">
        <h1>Interests</h1>
        <p className="interests-text">
        I love all things outdoors, particularly camping, campfires and breakfast cooked on a tiny camping stove with a mug of tea (heaven!). I enjoy these with my family which includes 2 rescue Pointers.
        </p>
        <div className="home-page-footer">
          <img src={Dom} className='icons' style={{ height: 35, width: 35 }} alt= 'Dom'/>
          <SocialIcon url="https://linkedin.com/in/jill-bmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
          <SocialIcon url="http://github.com/jillbmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
          <img src={Chess} className='icons' style={{ height: 35, width: 35 }} alt= 'Chess'/>
        </div>
      </section>
    )
  }