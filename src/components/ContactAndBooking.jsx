import { useState } from "react"

export default function ContactAndBooking(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
  const [contact, setContact] = useState({name:"", email:"", subject:"", message:""})
  const [appoint, setAppoint] = useState({full_name:"", email:"", phone:"", preferred_date:"", preferred_time:"Morning", service:"Consultation", notes:""})
  const [toast, setToast] = useState(null)

  const submit = async (path, data) => {
    try{
      const res = await fetch(`${baseUrl}/${path}`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)})
      const json = await res.json()
      if(res.ok && json.success){
        setToast({type:'success', text:'Submitted successfully'})
      } else {
        throw new Error(json.detail || 'Submission failed')
      }
    }catch(e){
      setToast({type:'error', text:e.message})
    } finally {
      setTimeout(()=> setToast(null), 3000)
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
          <form onSubmit={(e)=>{e.preventDefault(); submit('contact', contact)}} className="mt-6 space-y-4">
            <input className="w-full border rounded-md p-3" placeholder="Your name" value={contact.name} onChange={e=>setContact({...contact, name:e.target.value})} required/>
            <input className="w-full border rounded-md p-3" placeholder="Email" type="email" value={contact.email} onChange={e=>setContact({...contact, email:e.target.value})} required/>
            <input className="w-full border rounded-md p-3" placeholder="Subject" value={contact.subject} onChange={e=>setContact({...contact, subject:e.target.value})} required/>
            <textarea className="w-full border rounded-md p-3" rows="4" placeholder="Message" value={contact.message} onChange={e=>setContact({...contact, message:e.target.value})} required/>
            <button className="px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send</button>
          </form>
        </div>
        <div id="book">
          <h2 className="text-2xl font-bold text-slate-900">Request an appointment</h2>
          <form onSubmit={(e)=>{e.preventDefault(); submit('appointments', appoint)}} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border rounded-md p-3" placeholder="Full name" value={appoint.full_name} onChange={e=>setAppoint({...appoint, full_name:e.target.value})} required/>
            <input className="border rounded-md p-3" placeholder="Email" type="email" value={appoint.email} onChange={e=>setAppoint({...appoint, email:e.target.value})} required/>
            <input className="border rounded-md p-3" placeholder="Phone" value={appoint.phone} onChange={e=>setAppoint({...appoint, phone:e.target.value})} required/>
            <input className="border rounded-md p-3" placeholder="Preferred date (YYYY-MM-DD)" value={appoint.preferred_date} onChange={e=>setAppoint({...appoint, preferred_date:e.target.value})} required/>
            <select className="border rounded-md p-3" value={appoint.preferred_time} onChange={e=>setAppoint({...appoint, preferred_time:e.target.value})}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
            <select className="border rounded-md p-3" value={appoint.service} onChange={e=>setAppoint({...appoint, service:e.target.value})}>
              <option>Consultation</option>
              <option>Heart Checkup</option>
              <option>Follow-up</option>
            </select>
            <textarea className="sm:col-span-2 border rounded-md p-3" rows="4" placeholder="Notes (optional)" value={appoint.notes} onChange={e=>setAppoint({...appoint, notes:e.target.value})}/>
            <button className="sm:col-span-2 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Request Appointment</button>
          </form>
        </div>
      </div>
      {toast && (
        <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md text-white ${toast.type==='success' ? 'bg-emerald-600' : 'bg-red-600'}`}>{toast.text}</div>
      )}
    </section>
  )
}
