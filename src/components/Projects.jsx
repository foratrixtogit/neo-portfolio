// Projects: card interaktif + tilt/3D + reveal deskripsi
import React, { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'CRUD Laravel Siswa',
    desc: 'Aplikasi CRUD berbasis Laravel untuk manajemen data siswa.',
    img: 'crudlaravel.png', // Gambar 1
    tags: ['Laravel', 'PHP', 'MySQL'],
    live: '#',
    repo: '#'
  },
  {
    title: 'Game Pesawat C#',
    desc: 'Game 2D sederhana dengan fitur skor & boss fight.',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
    tags: ['C#', '.NET'],
    live: '#',
    repo: '#'
  },
  {
    title: 'Website Perpustakaan',
    desc: 'Web perpustakaan sekolah berbasis Laravel + API.',
    img: 'perpustakaan.jpg', // Gambar 3 or 4
    tags: ['Laravel', 'API', 'Comments'],
    live: '#',
    repo: '#'
  }
]

// util tilt
function useTilt() {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotX = ((y - midY) / midY) * -6
    const rotY = ((x - midX) / midX) * 6
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }
  return { ref, onMove, onLeave }
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {PROJECTS.map(p => {
            const { ref, onMove, onLeave } = useTilt()
            return (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .5 }}
                className="glass rounded-2xl overflow-hidden hover:shadow-glow cursor-pointer tilt"
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
              >
                <div className="relative h-44">
                  <img src={p.img} alt={p.title}
                       className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="opacity-80 mt-2 text-sm">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags.map(t => (
                      <span key={t}
                        className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <a className="inline-flex items-center gap-1 hover:underline" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16}/>Live</a>
                    <a className="inline-flex items-center gap-1 hover:underline" href={p.repo} target="_blank" rel="noreferrer"><Github size={16}/>Repo</a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View more */}
        <div className="text-center mt-8">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-ghost">
            View More ↗
          </a>
        </div>
      </div>
    </section>
  )
}
