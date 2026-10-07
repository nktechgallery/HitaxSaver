import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Eyebrow } from '../ui/Eyebrow';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { ContactForm } from '../forms/ContactForm';
import { Calculator, FileText, Receipt, Landmark, ClipboardCheck, Mail, Phone } from 'lucide-react';
import { CONTACT_IMAGE } from '../../constants/images';
import { BUSINESS_EMAIL, EMAIL_LINK, PHONE_LINK, PHONE_NUMBER } from '../../constants/seo';

const serviceCategories = [
  { icon: Calculator, label: 'Accounting' },
  { icon: FileText, label: 'Auditing' },
  { icon: Receipt, label: 'GST' },
  { icon: Landmark, label: 'Income Tax' },
  { icon: ClipboardCheck, label: 'TDS' },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" background="warm">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <AnimatedReveal>
              <Eyebrow className="mb-4">Get In Touch</Eyebrow>
              <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold text-text-primary">
                Let's make your accounting and compliance simpler.
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                Tell us what you need help with and the HiTaxSaver team will understand your
                requirements and discuss the next steps.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              {/* Service categories */}
              <div className="mt-8">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Service Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceCategories.map((cat) => (
                    <div
                      key={cat.label}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-border text-sm text-text-secondary"
                    >
                      <cat.icon className="w-3.5 h-3.5 text-purple-500" />
                      {cat.label}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              {/* Additional info */}
              <div className="mt-8 p-5 rounded-lg bg-white border border-border">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Share your basic details and requirements through the form. The team will review
                  your enquiry and reach out to discuss how HiTaxSaver can help with your specific
                  accounting and compliance needs.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25}>
              <div className="mt-8 space-y-3">
                <a
                  href={PHONE_LINK}
                  aria-label={`Call HiTaxSaver at ${PHONE_NUMBER}`}
                  className="flex items-center gap-3 rounded-md text-sm font-medium text-text-secondary transition-colors hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white border border-border">
                    <Phone className="w-4 h-4 text-purple-500" />
                  </span>
                  {PHONE_NUMBER}
                </a>
                <a
                  href={EMAIL_LINK}
                  aria-label={`Email HiTaxSaver at ${BUSINESS_EMAIL}`}
                  className="flex items-center gap-3 rounded-md text-sm font-medium text-text-secondary transition-colors hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white border border-border">
                    <Mail className="w-4 h-4 text-purple-500" />
                  </span>
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <figure className="mt-8 aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={CONTACT_IMAGE}
                  alt="HiTaxSaver support professional responding to a consultation enquiry"
                  className="h-full w-full object-cover"
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
              </figure>
            </AnimatedReveal>

            {/* Placeholder for contact details — uncomment when available */}
            {/*
            <AnimatedReveal delay={0.25}>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Mail className="w-4 h-4 text-purple-500" />
                  {BUSINESS_EMAIL}
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <Phone className="w-4 h-4 text-purple-500" />
                  {PHONE_NUMBER}
                </div>
              </div>
            </AnimatedReveal>
            */}
          </div>

          {/* Right: Form */}
          <div>
            <AnimatedReveal delay={0.1}>
              <div className="bg-white rounded-lg border border-border p-6 md:p-8 shadow-[0_4px_16px_rgba(26,22,37,0.04)]">
                <h3 className="text-lg font-semibold text-text-primary mb-6">
                  Request a Consultation
                </h3>
                <ContactForm />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
