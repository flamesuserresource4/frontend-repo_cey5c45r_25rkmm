import { motion } from 'framer-motion'
import { PhoneCall, MessageSquare, Headphones, Database, Workflow, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: PhoneCall,
    title: 'AI Voice Receptionists',
    desc: 'Natural voice, realtime response, call routing, calendars, and CRM updates.',
    points: ['Realtime STT/TTS', 'Live call transfer', 'Calendar booking']
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Chatbots',
    desc: 'Web, WhatsApp, Messenger, SMS—trained on your data for instant answers.',
    points: ['RAG over docs', 'Multilingual', 'Custom tone & guardrails']
  },
  {
    icon: Workflow,
    title: 'Automation Pipelines',
    desc: 'Automate support workflows end‑to‑end—verify users, create tickets, send updates.',
    points: ['CRM/Helpdesk integrations', 'Actions & tools', 'Human‑in‑the‑loop']
  },
  {
    icon: Database,
    title: 'Knowledge Base AI',
    desc: 'Securely ingest your knowledge and keep it fresh with scheduled syncs.',
    points: ['Connect Google Drive/Notion', 'Document embeddings', 'PII scrubbing']
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    desc: 'Enterprise‑grade privacy with SOC2 patterns, audit logs, and data retention.',
    points: ['Role‑based access', 'Redaction', 'Regional data storage']
  },
  {
    icon: Headphones,
    title: 'Hybrid Agent Handoffs',
    desc: 'Seamless switch to humans when needed with full context and transcripts.',
    points: ['Warm transfer', 'Transcripts', 'Sentiment routing']
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(650px_300px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(650px_300px_at_80%_90%,rgba(244,63,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Solutions designed for scale</h2>
          <p className="mt-4 text-slate-300">Deploy AI agents that delight customers and lower costs from day one.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, points }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 overflow-hidden">
              <div className="absolute -inset-16 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/15 to-amber-400/15 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li key={p} className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-200">{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
