import type { LucideIcon } from 'lucide-react';
import {
  Calculator,
  FileText,
  Receipt,
  Landmark,
  ClipboardCheck,
} from 'lucide-react';

export interface ServiceDeliverable {
  label: string;
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  whoNeeds: string;
  problemsSolved: string;
  icon: LucideIcon;
  deliverables: ServiceDeliverable[];
  entities: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    id: 'accounting',
    slug: 'accounting-services',
    number: '01',
    title: 'Accounting Services',
    seoTitle: 'Accounting & Bookkeeping Services | HiTaxSaver',
    metaDescription:
      'HiTaxSaver provides accounting, bookkeeping, ledger maintenance and reconciliation support for startups, MSMEs and businesses in India.',
    h1: 'Accounting & Bookkeeping Services',
    description:
      'Maintain clear and accurate financial records for better decision-making and regulatory compliance.',
    whoNeeds:
      'Businesses of all sizes that need organized financial records and ongoing bookkeeping support.',
    problemsSolved:
      'Disorganized books, missed entries, reconciliation gaps, and unclear financial position.',
    icon: Calculator,
    deliverables: [
      { label: 'Bookkeeping' },
      { label: 'Ledger Maintenance' },
      { label: 'Bank Reconciliation' },
      { label: 'Accounts Receivable' },
      { label: 'Accounts Payable' },
      { label: 'Financial Statement Preparation' },
      { label: 'Monthly Accounting Support' },
    ],
    entities: ['Bookkeeping', 'Ledgers', 'Bank reconciliation', 'Accounts payable', 'Accounts receivable', 'Profit and loss', 'Balance sheet', 'Cash flow'],
    faqs: [
      { question: 'What is included in accounting services?', answer: 'Accounting services can include bookkeeping, ledger maintenance, bank reconciliation, accounts payable and receivable tracking, financial statement preparation and monthly reporting support.' },
      { question: 'Who needs monthly bookkeeping support?', answer: 'Monthly bookkeeping support is useful for startups, MSMEs, firms and companies that need current records for decisions, GST, income tax, TDS and year-end compliance.' },
    ],
  },
  {
    id: 'auditing',
    slug: 'auditing-services',
    number: '02',
    title: 'Auditing Services',
    seoTitle: 'Auditing & Financial Review Services | HiTaxSaver',
    metaDescription:
      'HiTaxSaver supports financial record reviews, audit preparation and compliance documentation review for Indian businesses.',
    h1: 'Auditing & Financial Review Services',
    description:
      'Structured review and verification of financial records to improve accuracy, transparency and compliance.',
    whoNeeds:
      'Businesses preparing for statutory audits, seeking internal reviews, or wanting to verify their financial accuracy.',
    problemsSolved:
      'Unverified records, compliance gaps, inconsistent documentation, and audit-readiness concerns.',
    icon: FileText,
    deliverables: [
      { label: 'Financial Record Review' },
      { label: 'Internal Audit Support' },
      { label: 'Compliance Review' },
      { label: 'Documentation Verification' },
      { label: 'Account Reconciliation Review' },
      { label: 'Audit Preparation Assistance' },
    ],
    entities: ['Financial review', 'Internal review', 'Audit preparation', 'Compliance review', 'Documentation verification', 'Reconciliation review'],
    faqs: [
      { question: 'Does this page describe statutory audit services?', answer: 'HiTaxSaver can support financial review, internal review, audit preparation and documentation organization. Regulated statutory audit work should only be performed by legally authorized professionals.' },
      { question: 'How does audit preparation help a business?', answer: 'Audit preparation helps organize records, reconcile accounts, identify documentation gaps and reduce avoidable issues before a formal review or audit process.' },
    ],
  },
  {
    id: 'gst',
    slug: 'gst-compliance',
    number: '03',
    title: 'GST Compliance',
    seoTitle: 'GST Registration & Compliance Services | HiTaxSaver',
    metaDescription:
      'Get GST registration, GSTR-1, GSTR-3B, input tax credit reconciliation and GST filing support from HiTaxSaver.',
    h1: 'GST Compliance Services',
    description:
      'Help businesses manage GST registration, return filing and ongoing compliance requirements.',
    whoNeeds:
      'Any business registered under GST or approaching the registration threshold.',
    problemsSolved:
      'Missed GST filings, incorrect returns, input tax credit mismatches, and registration delays.',
    icon: Receipt,
    deliverables: [
      { label: 'GST Registration' },
      { label: 'GSTR-1 Preparation' },
      { label: 'GSTR-3B Filing Support' },
      { label: 'Input Tax Credit Reconciliation' },
      { label: 'GST Compliance Review' },
      { label: 'GST Filing Support' },
      { label: 'Notice / Documentation Assistance' },
    ],
    entities: ['GST registration', 'GST returns', 'GSTR-1', 'GSTR-3B', 'Input Tax Credit', 'GST reconciliation', 'GST notices', 'GSTIN', 'Tax invoices'],
    faqs: [
      { question: 'What is GST compliance?', answer: 'GST compliance means meeting the applicable GST registration, invoicing, return filing, tax payment, reconciliation and documentation requirements for a registered business.' },
      { question: 'Can HiTaxSaver help with GSTR-1 and GSTR-3B?', answer: 'Yes. HiTaxSaver can help organize data, prepare filing information, support GSTR-1 and GSTR-3B filing, and review input tax credit and sales data for consistency.' },
    ],
  },
  {
    id: 'income-tax',
    slug: 'income-tax-compliance',
    number: '04',
    title: 'Income Tax Compliance',
    seoTitle: 'Income Tax Filing & Compliance Services | HiTaxSaver',
    metaDescription:
      'HiTaxSaver helps individuals, freelancers and businesses with ITR preparation, income reconciliation, tax computation and filing support.',
    h1: 'Income Tax Filing & Compliance Services',
    description:
      'Help individuals and businesses handle income tax filings and related compliance requirements accurately.',
    whoNeeds:
      'Salaried individuals, freelancers, businesses, and anyone with taxable income needing filing assistance.',
    problemsSolved:
      'Missed filing deadlines, incorrect tax computation, incomplete documentation, and advance tax confusion.',
    icon: Landmark,
    deliverables: [
      { label: 'Income Tax Return Preparation' },
      { label: 'Individual ITR Filing' },
      { label: 'Business Tax Filing Support' },
      { label: 'Tax Computation' },
      { label: 'Advance Tax Guidance' },
      { label: 'Documentation Preparation' },
      { label: 'Income Reconciliation' },
    ],
    entities: ['Income Tax Return', 'ITR', 'Tax computation', 'Advance tax', 'Taxable income', 'Deductions', 'Business income', 'Capital gains', 'Assessment year'],
    faqs: [
      { question: 'Who can use income tax filing support?', answer: 'Salaried professionals, freelancers, business owners, partnership firms and companies may use filing support when they need help organizing income, deductions, computations and return information.' },
      { question: 'Does HiTaxSaver guarantee refunds?', answer: 'No. Refunds depend on actual tax computation, TDS, advance tax, eligible deductions and applicable income tax rules. HiTaxSaver does not guarantee refunds or outcomes.' },
    ],
  },
  {
    id: 'tds',
    slug: 'tds-compliance',
    number: '05',
    title: 'TDS Compliance',
    seoTitle: 'TDS Filing & Compliance Services | HiTaxSaver',
    metaDescription:
      'HiTaxSaver supports TDS calculation, payment tracking, return filing, Form 16, Form 16A and reconciliation for businesses.',
    h1: 'TDS Filing & Compliance Services',
    description:
      'Support businesses with TDS calculations, payments, return filing and documentation requirements.',
    whoNeeds:
      'Employers, businesses making contractual payments, and entities required to deduct tax at source.',
    problemsSolved:
      'Incorrect TDS deductions, delayed payments, missed return deadlines, and Form 16/16A issues.',
    icon: ClipboardCheck,
    deliverables: [
      { label: 'TDS Calculation' },
      { label: 'TDS Return Filing' },
      { label: 'TDS Payment Support' },
      { label: 'Form 16 Preparation' },
      { label: 'Form 16A Support' },
      { label: 'TDS Reconciliation' },
      { label: 'Compliance Reminders' },
    ],
    entities: ['Deductor', 'Deductee', 'TDS returns', 'Form 16', 'Form 16A', 'TAN', 'Challans', 'TDS reconciliation', 'TDS payment'],
    faqs: [
      { question: 'What is TDS compliance?', answer: 'TDS compliance involves deducting tax at source where applicable, depositing it on time, filing TDS returns, reconciling deductions and issuing forms such as Form 16 or Form 16A when required.' },
      { question: 'Who usually needs TDS filing support?', answer: 'Employers, businesses, firms and companies that make payments subject to TDS often need support with calculation, deposit, return filing and reconciliation.' },
    ],
  },
];
