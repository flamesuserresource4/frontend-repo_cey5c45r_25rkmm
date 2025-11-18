import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Discovery & design',
    desc: 'We define use‑cases, tone of voice, data sources, and success metrics.'
  },
  {
    step: '02',
    title: 'Agent build',
    desc: 'We prototype end‑to‑end flows, tools, and integrations in days, not months.'
  },
  {
    step: '03',
    title: 'Pilot & refine',
    desc: 'We ship a pilot, measure outcomes, and iterate fast with your team.'
  },
  {
    step: '04',
    title: 'Scale & support',
    desc: 'We productionize, monitor quality, and evolve with your roadmap.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">From idea to production in weeks</h2>
          <p className="mt-4 text-slate-300">A proven playbook that de‑risks cutting‑edge AI for your business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <div className="text-sm text-slate-400">{s.step}</div>
              <div className="mt-2 text-xl font-semibold text-white">{s.title}</div>
              <div className="mt-2 text-slate-300">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
