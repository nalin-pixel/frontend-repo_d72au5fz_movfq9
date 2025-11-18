import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Testimonials(){
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
  useEffect(()=>{
    fetch(`${baseUrl}/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])

  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 140, damping: 16 }} className="text-3xl font-bold text-slate-900">What patients say</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((t,i)=> (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, delay: i * 0.06 }}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-2">
                {Array.from({length: t.rating}).map((_,j)=> <span key={j}>⭐</span>)}
              </div>
              <p className="text-slate-700">“{t.text}”</p>
              <p className="mt-4 text-sm text-slate-500">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
