import { Container } from './Container';
import { NAV_LINKS } from '../../constants/navigation';
import { SERVICES } from '../../constants/services';
import { BRAND_ICON } from '../../constants/images';
import { BUSINESS_EMAIL, EMAIL_LINK, PHONE_LINK, PHONE_NUMBER } from '../../constants/seo';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-text-primary text-white/70 pt-16 pb-8">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="mb-4 inline-flex items-center gap-2 no-underline" aria-label="HiTaxSaver home">
              <img src={BRAND_ICON} alt="" className="h-10 w-10 object-contain" width="40" height="40" loading="lazy" />
              <span className="flex items-baseline">
                <span className="text-xl font-bold tracking-tight text-white">Hi</span>
                <span className="text-xl font-bold tracking-tight text-purple-400">TaxSaver</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Accounting, taxation and compliance support for individuals and businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-purple-400 no-underline transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/50 hover:text-purple-400 no-underline transition-colors duration-150"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <a href="/privacy-policy" className="text-sm text-white/50 hover:text-purple-400 no-underline transition-colors duration-150">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-disclaimer" className="text-sm text-white/50 hover:text-purple-400 no-underline transition-colors duration-150">
                  Terms &amp; Disclaimer
                </a>
              </li>
            </ul>

            {/* Placeholder for contact info — replace when available */}
            {/* 
            <div className="mt-6 space-y-2 text-sm text-white/50">
              <p>{BUSINESS_EMAIL}</p>
              <p>{PHONE_NUMBER}</p>
            </div>
            */}
            <div className="mt-6 space-y-2 text-sm text-white/50">
              <a
                href={EMAIL_LINK}
                aria-label={`Email HiTaxSaver at ${BUSINESS_EMAIL}`}
                className="block hover:text-purple-400 no-underline transition-colors duration-150"
              >
                Mail ID: {BUSINESS_EMAIL}
              </a>
              <a
                href={PHONE_LINK}
                aria-label={`Call HiTaxSaver at ${PHONE_NUMBER}`}
                className="block hover:text-purple-400 no-underline transition-colors duration-150"
              >
                Mobile No: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} HiTaxSaver. All rights reserved.
          </p>
          <p className="text-xs text-white/30 max-w-lg text-center md:text-right leading-relaxed">
            Information provided on this website is for general informational purposes and may vary based on individual circumstances and applicable regulations.
          </p>
        </div>
      </Container>
    </footer>
  );
}
