import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_10%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-12">
          <div className="absolute -inset-16 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 rounded-full blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Let’s build your AI support agent</h3>
              <p className="mt-3 text-slate-300">Tell us about your use‑case and we’ll share a tailored plan with timelines and pricing.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@auraline.ai" className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white w-full justify-center">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 font-semibold">Email us</span>
              </a>
              <a href="#" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 hover:bg-white/15 transition w-full text-center">Download deck</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
