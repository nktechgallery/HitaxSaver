import accountingImage from '../images/webp/accounting-services.webp';
import auditingImage from '../images/webp/auditing-services.webp';
import gstImage from '../images/webp/gst-compliance.webp';
import heroImage from '../images/webp/hitaxsaver-hero-cutout.webp';
import incomeTaxImage from '../images/webp/income-tax-compliance.webp';
import tdsImage from '../images/webp/tds-compliance.webp';
import brandIcon from '../images/webp/hitaxsaver-icon.webp';
import aboutTeamImage from '../images/webp/about-team.webp';
import contactSupportImage from '../images/webp/contact-support.webp';

export const HERO_IMAGE = heroImage;
export const BRAND_ICON = brandIcon;
export const ABOUT_IMAGE = aboutTeamImage;
export const CONTACT_IMAGE = contactSupportImage;

export const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  'accounting-services': { src: accountingImage, alt: 'Finance professional organizing bookkeeping and accounting records' },
  'auditing-services': { src: auditingImage, alt: 'Business professionals reviewing financial records and internal controls' },
  'gst-compliance': { src: gstImage, alt: 'Business owner and advisor reviewing GST invoices and compliance records' },
  'income-tax-compliance': { src: incomeTaxImage, alt: 'Tax advisor helping a professional prepare income tax records' },
  'tds-compliance': { src: tdsImage, alt: 'Finance professional checking TDS calculations and filing schedules' },
};
