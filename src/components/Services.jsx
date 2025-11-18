export default function Services(){
  const services = [
    {title:"Preventive Cardiology", desc:"Lifestyle, risk assessment and early interventions."},
    {title:"Heart Failure Care", desc:"Comprehensive management and follow ups."},
    {title:"Cardiac Imaging", desc:"Echocardiography, stress testing, and more."},
  ]
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Services</h2>
        <p className="text-slate-600 mt-2">Personalized care across a range of cardiovascular needs.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map(s=> (
            <div key={s.title} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}