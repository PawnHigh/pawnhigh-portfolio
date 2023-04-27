import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Experience, Tech, Projects, Testimonials, Contact, Footer, StarsCanvas} from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <Footer/>
          {/* <StarsCanvas/> */}
        </div>
        {/* <StarsCanvas/> */}
      </div>
    </BrowserRouter>
  )
}

export default App