import { motion } from "framer-motion"

export default function Services(){
  const services = [
    {title:"Preventive Cardiology", desc:"Lifestyle, risk assessment and early interventions."},
    {title:"Heart Failure Care", desc:"Comprehensive management and follow ups."},
    {title:"Cardiac Imaging", desc:"Echocardiography, stress testing, and more."},
  ]
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 140, damping: 16 }} className="text-3xl font-bold text-slate-900">Services</motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-slate-600 mt-2">Personalized care across a range of cardiovascular needs.</motion.p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((s,i)=> (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(30,58,138,0.12)' }}
              className="p-6 border rounded-xl shadow-sm bg-white"
            >
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
