import { SocialIcon } from 'react-social-icons'



export default function Footer(){
    return (
      <section className='footer'>
          <SocialIcon url="https://linkedin.com/in/jill-bmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
          <SocialIcon url="http://github.com/jillbmh" className= 'icons' bgColor='#766A78' style={{ height: 35, width: 35 }}/>
      </section>
    )
  }