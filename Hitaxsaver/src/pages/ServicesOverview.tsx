import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Seo } from '../components/Seo';
import { SERVICES } from '../constants/services';
import { SERVICE_IMAGES } from '../constants/images';

export function ServicesOverview() {
  return (
    <main className="pt-28">
      <Seo path="/services" />
      <section className="py-16 bg-bg-warm border-b border-border">
        <Container>
          <p className="eyebrow mb-4">Services</p>
          <h1>Accounting, Tax and Compliance Services</h1>
          <p className="mt-6 max-w-3xl text-lg">
            HiTaxSaver helps individuals and businesses in India stay organized across accounting,
            GST, income tax, TDS and financial review responsibilities. Each service page explains
            who it is for, what is included, common issues and how to get started.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article key={service.id} className="group overflow-hidden rounded-lg border border-border bg-white" data-scroll-reveal>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={SERVICE_IMAGES[service.slug].src} alt={SERVICE_IMAGES[service.slug].alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" width="1536" height="1024" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="mt-3">{service.description}</p>
                  <a className="inline-flex mt-5 font-semibold" href={`/services/${service.slug}`}>
                    View {service.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact" showArrow>Request Consultation</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
