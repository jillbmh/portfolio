import Dom from '../images/DOM.png'
import Chess from '../images/CHESS.png'
import Footer from './Footer'

export default function Interests() {
  return (
    <section className="interests-container" id='interests'>
      <section className='interests' id={'interests'}>
        <h1>Interests</h1>
        <img src={Chess} className='icons' id='Chess' style={{ height: 80, width: 80 }} alt='Chess' />
        <img src={Dom} className='icons' id='Dom' style={{ height: 80, width: 80 }} alt='Dom' />
        <p className="interests-text">
          I love all things outdoors, particularly camping, campfires and breakfast cooked on a tiny camping stove with a mug of tea (heaven!). I enjoy these with my family which includes 2 rescue Pointers.
        </p>
      </section>
      <Footer />
    </section>
  )
}