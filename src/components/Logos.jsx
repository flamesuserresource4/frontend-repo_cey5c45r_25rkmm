const logos = [
  { name: 'NovaTel', path: '/logos/novatel.svg' },
  { name: 'OrbitDesk', path: '/logos/orbitdesk.svg' },
  { name: 'Quanta', path: '/logos/quanta.svg' },
  { name: 'HelixCRM', path: '/logos/helix.svg' },
  { name: 'Nimbus', path: '/logos/nimbus.svg' },
  { name: 'VectorPay', path: '/logos/vectorpay.svg' },
]

export default function Logos() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-slate-400 mb-6">Trusted by modern teams</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 opacity-80">
          {logos.map(l => (
            <div key={l.name} className="flex items-center justify-center">
              <img src={l.path} alt={l.name} className="h-8 object-contain invert opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
