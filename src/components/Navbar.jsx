import { Stethoscope, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <motion.span initial={{ rotate: -15, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 12 }}>
            <Stethoscope className="w-6 h-6 text-blue-600" />
          </motion.span>
          <span className="tracking-tight">Hart Cardiology</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          {[
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#testimonials', label: 'Testimonials' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 relative"
            >
              {item.label}
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 -bottom-1 h-0.5 bg-blue-600"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: '100%', opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </motion.a>
          ))}
          <motion.a whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} href="#book" className="px-4 py-2 rounded-md bg-blue-600 text-white shadow-sm hover:shadow-md hover:bg-blue-700 transition">Book Visit</motion.a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="md:hidden border-t border-slate-200 overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#testimonials', label: 'Testimonials' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                  className="block"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a whileTap={{ scale: 0.98 }} href="#book" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-md bg-blue-600 text-white text-center">Book Visit</motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
