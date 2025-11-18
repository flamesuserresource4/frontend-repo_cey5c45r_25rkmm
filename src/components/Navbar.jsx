import { useState } from 'react'
import { Menu, X, MessageSquare, PhoneCall, Bot, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#how', label: 'How it works' },
    { href: '#clients', label: 'Clients' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-amber-400 opacity-60" />
                <div className="relative h-9 w-9 rounded-xl bg-slate-900/90 ring-1 ring-white/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="font-semibold text-white tracking-tight">Auraline AI</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 font-medium">Book a demo</span>
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-90" />
                  <span className="relative z-10 font-medium">Book a demo</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
