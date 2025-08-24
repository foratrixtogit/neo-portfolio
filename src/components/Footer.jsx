// Footer: neon separator + teks hak cipta
import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-10">
      <div className="container">
        {/* Neon separator */}
        <div className="h-[2px] w-full bg-primary-600/40 shadow-glow rounded-full"></div>
        <p className="text-center opacity-70 py-6">
          © 2025 Tri Atmaja. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
