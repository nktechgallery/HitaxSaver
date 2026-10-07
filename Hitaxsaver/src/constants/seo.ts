import { SERVICES } from './services';

export const SITE_URL = 'https://www.hitaxsaver.com';
export const BUSINESS_EMAIL = 'hitaxsaver@gmail.com';
export const PHONE_NUMBER = '+91 7200555987';
export const PHONE_LINK = 'tel:+917200555987';
export const EMAIL_LINK = `mailto:${BUSINESS_EMAIL}`;
export const WHATSAPP_LINK =
  'https://wa.me/917200555987?text=Hello%20HiTaxSaver%2C%20I%20would%20like%20to%20discuss%20a%20tax%20or%20accounting%20requirement.';
export const BUSINESS_ADDRESS = '[BUSINESS_ADDRESS]';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  h1: string;
}

export const PAGE_META: PageMeta[] = [
  {
    path: '/',
    title: 'HiTaxSaver | Accounting, GST, Income Tax & TDS Services',
    description:
      'HiTaxSaver provides accounting, GST, income tax, TDS and compliance support for individuals, startups and businesses in India.',
    h1: 'Accounting and tax compliance, handled with clarity.',
  },
  {
    path: '/services',
    title: 'Accounting, GST, Income Tax & TDS Services | HiTaxSaver',
    description:
      'Explore HiTaxSaver services for accounting, auditing, GST compliance, income tax filing and TDS compliance in India.',
    h1: 'Accounting, Tax and Compliance Services',
  },
  {
    path: '/about',
    title: 'About HiTaxSaver | Accounting and Tax Compliance Support',
    description:
      'Learn about HiTaxSaver, an accounting, taxation and business compliance support provider serving individuals and businesses in India.',
    h1: 'About HiTaxSaver',
  },
  {
    path: '/contact',
    title: 'Contact HiTaxSaver | Accounting and Tax Consultation',
    description:
      'Contact HiTaxSaver to discuss accounting, GST, income tax, TDS, auditing and business compliance requirements.',
    h1: 'Contact HiTaxSaver',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | HiTaxSaver',
    description:
      'Read the HiTaxSaver privacy policy, including how consultation enquiry information should be handled.',
    h1: 'Privacy Policy',
  },
  {
    path: '/terms-disclaimer',
    title: 'Terms and Disclaimer | HiTaxSaver',
    description:
      'Read HiTaxSaver terms and disclaimer for general accounting, tax and compliance information.',
    h1: 'Terms and Disclaimer',
  },
  ...SERVICES.map((service) => ({
    path: `/services/${service.slug}`,
    title: service.seoTitle,
    description: service.metaDescription,
    h1: service.h1,
  })),
];

export function getMeta(pathname: string) {
  const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  return PAGE_META.find((page) => page.path === cleanPath) ?? PAGE_META[0];
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HiTaxSaver',
    url: SITE_URL,
    description:
      'HiTaxSaver provides accounting, GST, income tax, TDS, auditing and business compliance services for individuals and businesses in India.',
    areaServed: 'IN',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: PHONE_NUMBER,
      email: BUSINESS_EMAIL,
      areaServed: 'IN',
      availableLanguage: ['en'],
    },
    address: BUSINESS_ADDRESS,
    sameAs: [],
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HiTaxSaver',
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: { '@type': 'Organization', name: 'HiTaxSaver' },
  };
}

export function buildServiceSchema(serviceSlug: string) {
  const service = SERVICES.find((item) => item.slug === serviceSlug);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: { '@type': 'Organization', name: 'HiTaxSaver', url: SITE_URL },
    areaServed: 'IN',
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    audience: {
      '@type': 'Audience',
      audienceType: 'Individuals, freelancers, startups, MSMEs and businesses in India',
    },
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
