// Navbar fixed transparan dengan blur + smooth scroll anchor
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="container">
        <div className="mt-4 glass px-4 py-3 flex items-center justify-between">
          {/* Branding */}
          <a href="#home" className="font-bold text-lg neon">Portofolio<span className="text-white"></span></a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.id}
                 href={`#${l.id}`}
                 className="opacity-90 hover:opacity-100 hover:text-primary-500 transition">
                 {l.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden glass px-4 py-3 mt-2">
            <div className="flex flex-col gap-3">
              {links.map(l => (
                <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
