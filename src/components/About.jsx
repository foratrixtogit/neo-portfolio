// About: foto profil lingkaran neon + animasi scroll
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        {/* Foto profil bulat dengan hover neon */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .6 }}
          className="flex justify-center">
          <div className="relative p-1 rounded-full shadow-glow">
            <img
              src="fotoporto.png"
              alt="Tri Atmaja"
              className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-primary-600 transition hover:shadow-glow hover:scale-[1.02]"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full shadow-inner-neon"></span>
          </div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .6 }}
          className="glass p-6 sm:p-8">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className="opacity-85 mt-4 leading-7">
            Saya pelajar <b>SMKN 10 Jakarta</b> jurusan <b>Rekayasa Perangkat Lunak</b>, pecinta
            fotografi, videografi, dan teknologi. Saya senang membangun
            antarmuka yang <i>accessible</i>, performa tinggi, dan punya sentuhan visual futuristik.
            <br /><br />
            Terbuka untuk <b>kolaborasi</b>, internship, atau proyek kreatif yang menantang.
          </p>

          <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm opacity-90">
            <li className="glass px-3 py-2 rounded-lg">Performance-first.</li>
            <li className="glass px-3 py-2 rounded-lg">Design system.</li>
            <li className="glass px-3 py-2 rounded-lg">Aksesibilitas.</li>
            <li className="glass px-3 py-2 rounded-lg">Reusable components.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
