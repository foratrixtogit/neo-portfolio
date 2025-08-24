// Skills: grid icon teknologi + kreatif dengan hover neon
import React from 'react'
import { Code2, Layers, Rocket, Camera, Scissors, Image } from 'lucide-react'

const skills = [
  { name: 'React',        badge: 'Frontend',    icon: <Rocket /> },
  { name: 'Tailwind',     badge: 'Styling',     icon: <Layers /> },
  { name: 'JavaScript',   badge: 'Core',        icon: <Code2 /> },
  { name: 'C#',           badge: 'Game/Apps',   icon: <Code2 /> },
  { name: 'Laravel',      badge: 'Backend',     icon: <Code2 /> },
  { name: 'Editing',      badge: 'Creative',    icon: <Scissors /> },
  { name: 'Videografi',   badge: 'Creative',    icon: <Camera /> },
  { name: 'Fotografi',    badge: 'Creative',    icon: <Image /> },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-10">
          {skills.map(s => (
            <div
              key={s.name}
              className="glass p-5 text-center rounded-2xl hover:shadow-glow hover:scale-[1.05] transition"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-3">
                {s.icon}
              </div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-xs opacity-70 mt-1">{s.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
