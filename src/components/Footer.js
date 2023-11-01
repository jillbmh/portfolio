import { SocialIcon } from 'react-social-icons'
import Dom from '../images/DOM.png'
import Chess from '../images/CHESS.png'


export default function Footer(){
    return (
      <section className='footer'>
          <img src={Dom} className='icons' style={{ height: 35, width: 35 }} alt= 'Dom'/>
          <SocialIcon url="https://linkedin.com/in/jill-bmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
          <SocialIcon url="http://github.com/jillbmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
          <img src={Chess} className='icons' style={{ height: 35, width: 35 }} alt= 'Chess'/>
      </section>
    )
  }