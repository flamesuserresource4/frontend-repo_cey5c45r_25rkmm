import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center pt-28">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              AI Customer Support that sounds human, works 24/7, and never misses a beat.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
              We design and deploy voice agents, receptionists, and chatbots that resolve customer issues instantly—across phone, web, and messaging.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 font-semibold">Book a strategy call</span>
              </a>
              <a href="#solutions" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 hover:bg-white/15 transition">Explore solutions</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-10 flex items-center gap-6 text-slate-300">
              <div>
                <div className="text-3xl font-extrabold text-white">60%+</div>
                <div className="text-sm">Call deflection</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-extrabold text-white"><span className="inline-block translate-y-[-2px]">⏱</span> 1-2w</div>
                <div className="text-sm">From idea to production</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-extrabold text-white">99.9%</div>
                <div className="text-sm">Uptime across channels</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-16 bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30 rounded-full blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-slate-200">
                  {[
                    { title: 'AI Receptionist', desc: 'Greets, routes, and resolves via phone.' },
                    { title: 'AI Telefonist', desc: 'Handles inbound/outbound calls at scale.' },
                    { title: 'Chat Assistants', desc: 'Web, WhatsApp, Messenger & more.' },
                    { title: 'Knowledge Bots', desc: 'Answers from your docs and CRM.' },
                  ].map((card) => (
                    <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-semibold text-white">{card.title}</div>
                      <div className="text-sm text-slate-300 mt-1">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
