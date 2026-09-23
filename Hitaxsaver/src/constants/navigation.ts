export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CTA_PRIMARY = 'Request Consultation';
export const CTA_SECONDARY = 'Explore Services';
export const CTA_BRAND = 'Talk to HiTaxSaver';
export const CTA_FORM = 'Request Consultation';
