import { ReactNode } from "react"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Education } from "./pages/Education"
import { Experience } from "./pages/Experience"
import { Footer } from "./pages/Footer"
import { NavBar } from "./pages/Header"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

export const App = () => {
  return <>
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Experience />
    <Education />
    <Contact />
    <Footer/>
  </>
}
