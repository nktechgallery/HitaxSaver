import { CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Seo } from '../components/Seo';
import { SERVICES } from '../constants/services';
import { SITE_URL, buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../constants/seo';
import { SERVICE_IMAGES } from '../constants/images';

export function ServicePage({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug) ?? SERVICES[0];
  const image = SERVICE_IMAGES[service.slug];
  const schema = [
    buildServiceSchema(service.slug),
    buildFaqSchema(service.faqs),
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
    ]),
  ].filter(Boolean) as object[];

  return (
    <main className="pt-28">
      <Seo path={`/services/${service.slug}`} schema={schema} />
      <section className="py-16 bg-bg-warm border-b border-border">
        <Container>
          <nav className="text-sm mb-6" aria-label="Breadcrumb">
            <a href="/">Home</a> <span className="text-text-muted">/</span> <a href="/services">Services</a>{' '}
            <span className="text-text-muted">/</span> <span>{service.title}</span>
          </nav>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow mb-4">HiTaxSaver Services</p>
              <h1>{service.h1}</h1>
              <p className="mt-6 text-lg leading-relaxed">
                {service.description} HiTaxSaver supports individuals, freelancers, startups, MSMEs
                and growing businesses in India with practical, organized compliance assistance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" showArrow>Request Consultation</Button>
              </div>
            </div>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_18px_50px_rgba(26,22,37,0.16)]">
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" width="1536" height="1024" />
            </figure>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-bold">Who This Is For</h2>
              <p className="mt-4">{service.whoNeeds}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Problems Solved</h2>
              <p className="mt-4">{service.problemsSolved}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Key Topics</h2>
              <ul className="mt-4 space-y-2 p-0 list-none">
                {service.entities.map((entity) => (
                  <li key={entity} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-purple-700 flex-shrink-0" />{entity}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-warm">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold">How HiTaxSaver Helps</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item) => (
                  <div key={item.label} className="rounded-md border border-border bg-white p-4 text-sm font-medium text-text-primary">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Process</h2>
              <ol className="mt-6 space-y-4 pl-5">
                <li>Share your business type, service need and current compliance status.</li>
                <li>HiTaxSaver reviews the relevant records and confirms the information required.</li>
                <li>The work is prepared, reconciled and checked against the applicable service scope.</li>
                <li>You receive filing, documentation or reporting support with clear next steps.</li>
              </ol>
              <p className="mt-6 text-sm text-text-muted">
                Please do not submit PAN, Aadhaar, passwords, OTPs or confidential financial documents through the public consultation form.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="border-t border-border pt-5">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-purple-700 p-8 text-white">
            <h2 className="text-2xl font-bold !text-white">Discuss Your {service.title} Requirements</h2>
            <p className="mt-3 text-white/80">Tell HiTaxSaver what you need help with, and the team will discuss the right next step.</p>
            <Button href="/contact" variant="inverted" className="mt-6" showArrow>Contact HiTaxSaver</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
