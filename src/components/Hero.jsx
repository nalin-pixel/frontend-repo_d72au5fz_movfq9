import { useEffect, useState } from "react"

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
        <div>
          <p className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm mb-4">Compassionate, evidence-based care</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {profile ? profile.name : "Loading..."}
          </h1>
          <p className="text-xl text-slate-600 mt-2">{profile ? profile.title : ""}</p>
          <p className="text-slate-700 mt-6">
            {profile ? profile.bio : ""}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile?.specialties?.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{s}</span>
            ))}
          </div>
          <a href="#book" className="inline-flex mt-8 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Book an Appointment</a>
        </div>
        <div className="flex justify-center items-start">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-200/40 blur-2xl rounded-full" />
            <img src={profile?.photo_url || "/doctor.jpg"} alt="Doctor" className="relative w-80 h-80 object-cover rounded-2xl shadow-xl border border-slate-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
