import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [profile, setProfile] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  useEffect(() => {
    fetch(`${baseUrl}/profile`).then(r=>r.json()).then(setProfile).catch(()=>{})
  }, [])

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm mb-4">Compassionate, evidence-based care</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {profile ? profile.name : "Loading..."}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 mt-2">{profile ? profile.title : ""}</motion.p>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-slate-700 mt-6">
            {profile ? profile.bio : ""}
          </motion.p>
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-6 flex flex-wrap gap-2">
            {profile?.specialties?.map((s) => (
              <motion.span key={s} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{s}</motion.span>
            ))}
          </motion.div>
          <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#book" className="inline-flex mt-8 px-5 py-3 bg-blue-600 text-white rounded-md shadow-sm hover:shadow-lg hover:bg-blue-700">Book an Appointment</motion.a>
        </motion.div>
        <div className="flex justify-center items-start">
          <motion.div initial={{ rotate: -2, opacity: 0, y: 16 }} animate={{ rotate: 0, opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 140, damping: 16 }} className="relative">
            <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-full" />
            <motion.img whileHover={{ y: -6 }} src={profile?.photo_url || "/doctor.jpg"} alt="Doctor" className="relative w-80 h-80 object-cover rounded-2xl shadow-xl border border-slate-200" />
          </motion.div>
        </div>
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-200/50 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-cyan-200/50 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
    </section>
  )
}
