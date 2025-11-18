import { useEffect, useState } from "react"

export default function Testimonials(){
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
  useEffect(()=>{
    fetch(`${baseUrl}/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])

  return (
    <section id="testimonials" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">What patients say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((t,i)=> (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              <div className="flex gap-2 mb-2">
                {Array.from({length: t.rating}).map((_,i)=> <span key={i}>⭐</span>)}
              </div>
              <p className="text-slate-700">“{t.text}”</p>
              <p className="mt-4 text-sm text-slate-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}