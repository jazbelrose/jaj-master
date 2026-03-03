import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ParallaxBreak from './components/ParallaxBreak'
import Brands from './components/Brands'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 300,
      once: true,
    })
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ParallaxBreak />
      <Brands />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default App
