// Mengorkestrasi semua section + background global
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      {/* Background global grid + radial glow */}
      <div className="fixed inset-0 -z-10 bg-neon-grid bg-grid-24 [background-position:0_0,0_0]"></div>
      <div className="fixed inset-0 -z-10 bg-radial-fade"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
