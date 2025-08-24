// Contact: form + framer-motion + social icons glow
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'

const PROFILE = {
  email: 'triatmaja@example.com',
  ig: 'https://instagram.com/foratrixt',
  github: 'https://github.com/foratrixtogit',
  linkedin: 'https://www.linkedin.com/in/tri-atmaja-abdu-hair/'
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="opacity-75 mt-2">Siap berkolaborasi? Yuk ngobrol!</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .5 }}
          className="glass p-6 rounded-2xl space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget)
            const name = fd.get('name')
            const email = fd.get('email')
            const msg = fd.get('message')
            window.location.href =
              `mailto:${PROFILE.email}?subject=Hi%20Tri%20Atmaja&body=${encodeURIComponent(
                `Halo, saya ${name}\n\n${msg}\n\n(${email})`
              )}`
          }}
        >
          <input name="name" placeholder="Nama"
                 className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                 required />
          <input type="email" name="email" placeholder="Email"
                 className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                 required />
          <textarea name="message" rows={5} placeholder="Pesan"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none"
                    required />
          <button className="w-full btn btn-primary">Kirim</button>
        </motion.form>

        {/* Socials */}
        <div className="flex items-center justify-center gap-6 mt-6 text-primary-600">
          <a className="hover:shadow-glow hover:text-primary-500 transition rounded-xl p-2"
             href={PROFILE.ig} target="_blank" rel="noreferrer"><Instagram /></a>
          <a className="hover:shadow-glow hover:text-primary-500 transition rounded-xl p-2"
             href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
          <a className="hover:shadow-glow hover:text-primary-500 transition rounded-xl p-2"
             href={PROFILE.github} target="_blank" rel="noreferrer"><Github /></a>
        </div>
      </div>
    </section>
  )
}
