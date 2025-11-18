import { Stethoscope, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <Stethoscope className="w-6 h-6 text-blue-600" />
          <span>Hart Cardiology</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="#book" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Book Visit</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 px-4 pb-4 space-y-2">
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Services</a>
          <a href="#testimonials" className="block">Testimonials</a>
          <a href="#contact" className="block">Contact</a>
          <a href="#book" className="block px-4 py-2 rounded-md bg-blue-600 text-white">Book Visit</a>
        </div>
      )}
    </header>
  )
}
