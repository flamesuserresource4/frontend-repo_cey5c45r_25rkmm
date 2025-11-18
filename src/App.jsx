import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(900px_400px_at_90%_0%,rgba(251,113,133,0.16),transparent_60%),radial-gradient(1000px_500px_at_50%_100%,rgba(251,191,36,0.12),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Logos />
        <Solutions />
        <HowItWorks />
        <CTA />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white/10" />
              <span>© {new Date().getFullYear()} Auraline AI — All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
