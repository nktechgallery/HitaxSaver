import { Container } from '../components/layout/Container';
import { ContactSection } from '../components/sections/ContactSection';
import { Seo } from '../components/Seo';
import { SERVICES } from '../constants/services';
import { ABOUT_IMAGE } from '../constants/images';
import { Button } from '../components/ui/Button';
import { CheckCircle2, FileCheck2, LockKeyhole, Scale, ShieldCheck, Users } from 'lucide-react';

const audiences = [
  'Individuals and salaried professionals',
  'Freelancers and independent professionals',
  'Startups and growing businesses',
  'MSMEs and business owners',
  'Partnership firms and LLPs',
  'Private limited companies',
];

const principles = [
  { icon: ShieldCheck, title: 'Clarity first', copy: 'Requirements, records and next steps should be explained in practical language so clients can make informed decisions.' },
  { icon: FileCheck2, title: 'Organized work', copy: 'Structured records and reconciliations help reduce avoidable confusion across accounting and compliance activities.' },
  { icon: Scale, title: 'Responsible guidance', copy: 'HiTaxSaver avoids guaranteed outcomes, unsupported claims and advice that depends on incomplete information.' },
  { icon: LockKeyhole, title: 'Care with information', copy: 'Sensitive identifiers, passwords and confidential documents should only be shared through an appropriately secure process.' },
];

export function AboutPage() {
  return (
    <main className="pt-28">
      <Seo path="/about" />
      <section className="border-b border-border bg-bg-warm py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">About HiTaxSaver</p>
              <h1>Clearer accounting and compliance support for India.</h1>
              <p className="mt-6 text-lg leading-relaxed">
                HiTaxSaver provides accounting, GST, income tax, TDS, financial review and business
                compliance support for individuals and businesses in India. The focus is practical:
                understand the requirement, organize the information and help move the work forward clearly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" showArrow>Talk to HiTaxSaver</Button>
                <Button href="/services" variant="secondary" size="lg">Explore Services</Button>
              </div>
            </div>
            <figure className="group aspect-[4/3] overflow-hidden rounded-lg shadow-[0_18px_50px_rgba(26,22,37,0.15)]">
              <img src={ABOUT_IMAGE} alt="HiTaxSaver team planning accounting and compliance support" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" width="1536" height="1024" />
            </figure>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-4">What We Do</p>
              <h2 className="text-3xl font-bold">Connected support across your financial responsibilities.</h2>
              <p className="mt-5 leading-relaxed">
                Accounting and tax obligations often overlap. HiTaxSaver brings the core work into one
                understandable service structure, helping clients see how records, returns and recurring
                responsibilities fit together.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group flex gap-4 rounded-md border border-border bg-white p-5 no-underline transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-purple-50 text-purple-700">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold group-hover:text-purple-700">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-bg-warm py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-purple-700" aria-hidden="true" />
                <h2 className="text-3xl font-bold">Who HiTaxSaver supports</h2>
              </div>
              <p className="mt-5 leading-relaxed">
                Different clients need different levels of help, from an individual return to recurring
                business accounting and compliance coordination.
              </p>
              <ul className="mt-7 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <li key={audience} className="flex items-start gap-2 text-sm text-text-primary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-purple-600" aria-hidden="true" />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold">How the work is approached</h2>
              <ol className="mt-7 space-y-5">
                {[
                  ['01', 'Understand', 'Clarify the client, business context, requirement and relevant deadlines.'],
                  ['02', 'Organize', 'Identify the records, documents and reconciliations needed for the service.'],
                  ['03', 'Prepare and review', 'Complete the agreed work and check it for consistency before finalization.'],
                  ['04', 'Complete and support', 'Close the current requirement and clarify practical next steps.'],
                ].map(([number, title, copy]) => (
                  <li key={number} className="flex gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0">
                    <span className="text-sm font-bold text-purple-600">{number}</span>
                    <div>
                      <h3 className="text-base font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Working Principles</p>
            <h2 className="text-3xl font-bold">Built around clarity, organization and responsible support.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.title} className="bg-white p-6">
                <principle.icon className="h-6 w-6 text-purple-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{principle.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#211F26] py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase text-purple-300">Trust and transparency</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold !text-white">Clear boundaries matter in financial services.</h2>
              <p className="mt-5 max-w-3xl leading-relaxed !text-white/70">
                Website information is general and is not individualized tax, legal or financial advice.
                Regulated statutory audit work must be performed by legally authorized professionals, and
                professional qualifications should only be stated when verified.
              </p>
            </div>
            <Button href="/contact" variant="inverted" size="lg" showArrow className="w-full md:w-auto">
              Discuss Your Requirements
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="pt-20">
      <Seo path="/contact" />
      <ContactSection />
    </main>
  );
}

export function PrivacyPage() {
  return <PolicyPage path="/privacy-policy" title="Privacy Policy" body="HiTaxSaver should collect only the information needed to respond to an enquiry. Do not submit PAN, Aadhaar, OTPs, passwords or confidential financial documents through the public consultation form. Replace [BUSINESS_EMAIL], [PHONE_NUMBER] and [BUSINESS_ADDRESS] with verified details before launch." />;
}

export function TermsPage() {
  return <PolicyPage path="/terms-disclaimer" title="Terms and Disclaimer" body="Information on this website is for general informational purposes and should not be treated as individualized tax, legal or financial advice. Tax rules can change and individual circumstances vary. Professional review is recommended before relying on regulatory content." />;
}

function PolicyPage({ path, title, body }: { path: string; title: string; body: string }) {
  return (
    <main className="pt-28">
      <Seo path={path} />
      <section className="py-16">
        <Container>
          <h1>{title}</h1>
          <p className="mt-6 max-w-3xl">{body}</p>
          <h2 className="mt-10 text-2xl font-bold">Related Services</h2>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((service) => (
              <li key={service.id}><a href={`/services/${service.slug}`}>{service.title}</a></li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
