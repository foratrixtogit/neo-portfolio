// Hero futuristik: framer-motion, typing effect sederhana, parallax mouse layer, background bintang
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useParallax(strength = 20) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX - w/2) / w
      const y = (e.clientY - h/2) / h
      el.style.transform = `translate3d(${x * -strength}px, ${y * -strength}px, 0)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [strength])
  return ref
}

// typing effect sederhana
function useTyping(text, speed = 35) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setOut(text.slice(0, ++i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return out
}

export default function Hero() {
  const layerRef = useParallax(14)
  const typed = useTyping("Hi, im Tri Atmaja — Creative Student & Tech Enthusiast!", 18)

  return (
    <section id="home" className="section relative min-h-[88vh] flex items-center fx-stars overflow-hidden">
      <div className="container relative">
        {/* Parallax neon gradient blob */}
        <div ref={layerRef}
             className="absolute -top-20 right-0 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
             style={{
               background: "conic-gradient(from 90deg at 50% 50%, rgba(34,211,238,.7), rgba(0,0,0,0) 60%)"
             }} />

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm glass mb-4">
          Building the future experience..
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold neon">
          {typed}
          <span className="ml-1 animate-pulse">▌</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .2 }}
          className="max-w-2xl opacity-85 mt-5 text-lg">
           Seorang pelajar di SMKN 10 Jakarta jurusan Rekayasa Perangkat Lunak yang memiliki ketertarikan mendalam pada dunia teknologi, fotografi, videografi, dan editing.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .3 }}
          className="flex items-center gap-3 mt-8">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="#projects" className="btn btn-ghost">View Projects</a>
        </motion.div>

        {/* Decorative shimmer line */}
        <div className="relative mt-10 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="absolute inset-y-0 -translate-x-full w-1/3 bg-primary-600/60 blur-sm animate-shimmer"></div>
        </div>
      </div>
    </section>
  )
}
