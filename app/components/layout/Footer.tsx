import Link from 'next/link'

const footerNav = {
  marketing: [
    { title: 'Fractional CMO', href: '/marketing/fractional-cmo' },
    { title: 'Ampere Digital', href: '/marketing/ampere-digital' },
  ],
  ai: [
    { title: 'aAi', href: '/ai/aai' },
    { title: 'amOS', href: '/ai/amos' },
    { title: 'avOS', href: '/ai/avos' },
  ],
  site: [
    { title: 'About', href: '/about' },
    { title: 'Ventures', href: '/ventures' },
    { title: 'Thinking', href: '/thinking' },
    { title: 'Connect', href: '/connect' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brand-dark-slate py-16 text-brand-text-light-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl text-brand-text-light">NAUMAN KHAN</h3>
            <p className="mt-2">Founder · Operator · Venture Partner</p>
          </div>
          <div className="grid grid-cols-3 gap-8 md:col-span-2">
            <div>
              <h4 className="font-bold text-brand-text-light">Marketing</h4>
              <ul className="mt-4 space-y-2">
                {footerNav.marketing.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:text-teal-500">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-text-light">AI</h4>
              <ul className="mt-4 space-y-2">
                {footerNav.ai.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:text-teal-500">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-text-light">Site</h4>
              <ul className="mt-4 space-y-2">
                {footerNav.site.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:text-teal-500">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-brand-border pt-8">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/naumankhan/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
              LinkedIn
            </a>
            <a href="mailto:nauman@amperedigital.ca" className="hover:text-teal-500">
              Email
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Nauman Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
