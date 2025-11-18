import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactAndBooking from './components/ContactAndBooking'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <ContactAndBooking />
      <footer className="border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Hart Cardiology. All rights reserved.</p>
          <a className="text-blue-600" href="/test">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
