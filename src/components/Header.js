import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <section className='header-nav'>
        <Link to= '/' className="link-text"> HOME </Link>
        <Link to= '/Contact' className="link-text"> CONTACT </Link>
      </section>
    </header>
  )
}