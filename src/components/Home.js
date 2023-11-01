import Intro from "./Intro"
import Experience from "./Experience"
import About from "./About"
import Interests from "./Interests"


export default function Home(){
    return (
        <main className="home">
            <Intro />
            <Experience />
            <About />
            <Interests />
        </main>
    )
}