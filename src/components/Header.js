
export default function Header() {
  return (
    <header>
      <section className='header-nav'>
        <div onClick={() => window.location.replace("/#projects")}>
          <span>PROJECTS</span>
        </div>
        <div onClick={() => window.location.replace("/#about")}>
          <span>ABOUT</span>
        </div>
        <div onClick={() => window.location.replace("/#interests")}>
          <span>INTERESTS</span>
        </div>
      </section>
    </header>
  )
}