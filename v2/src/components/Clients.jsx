// Selected clients -- logo strip only.
//
// This is deliberately NOT a portfolio. Marks only, no project names, no links into
// draperysociety.com/projects/* or xctnproduction.com/work/*. The parent must not carry
// the ventures' case-study content or it competes with them in search.
//
// `cleared` gates rendering. A client appears here only once BOTH are true:
//   1. the mark is a real asset in /public/images/clients/
//   2. permission to use it is in writing, and no contract publicity clause forbids it
// PwC and Chevron are listed so the intent is recorded, but stay dark until cleared.
//
// The five testimonials that shipped with this template were deleted on 2026-08-08.
// Every one was fabricated -- invented people ("Sophie Mitchell, Aura Agency"), invented
// companies, invented quotes, stock-photo avatars. Publishing them would be fake
// endorsements. Do not restore them. Real quotes only, from real people, agreed in writing.
const clients = [
  { name: 'PwC', logo: '/images/clients/pwc.svg', cleared: false },
  { name: 'Chevron', logo: '/images/clients/chevron.svg', cleared: false },
  { name: 'e.l.f. Cosmetics', logo: '/images/clients/elf.png', cleared: true },
  { name: 'Ulta Beauty', logo: '/images/clients/ulta.png', cleared: true },
]

export default function Clients() {
  const visible = clients.filter((c) => c.cleared)
  if (!visible.length) return null

  return (
    <section id="clients" className="s-clients">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Selected Clients</h3>
          <h1 className="display-2">
            The work is delivered for brands that do not get second chances.
          </h1>
        </div>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="clients-logos">
          {visible.map((client) => (
            <span key={client.name} className="client-mark">
              <img src={client.logo} alt={client.name} loading="lazy" />
            </span>
          ))}
        </div>
      </div>

      <div className="row" data-aos="fade-up">
        <p className="clients-foot">
          Delivered through Drapery Society and XCTN Production.
        </p>
      </div>
    </section>
  )
}
