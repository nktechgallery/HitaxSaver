import { useState, type FormEvent } from 'react';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { Button } from '../ui/Button';
import { CircleCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CUSTOMER_TYPES = [
  { value: 'individual', label: 'Individual' },
  { value: 'salaried', label: 'Salaried Professional' },
  { value: 'freelancer', label: 'Freelancer' },
  { value: 'startup', label: 'Startup' },
  { value: 'small-business', label: 'Small Business' },
  { value: 'msme', label: 'MSME' },
  { value: 'partnership', label: 'Partnership Firm' },
  { value: 'company', label: 'Company' },
  { value: 'other', label: 'Other' },
];

const SERVICES = [
  { value: 'accounting', label: 'Accounting Services' },
  { value: 'auditing', label: 'Auditing Services' },
  { value: 'gst', label: 'GST Compliance' },
  { value: 'income-tax', label: 'Income Tax Compliance' },
  { value: 'tds', label: 'TDS Compliance' },
  { value: 'multiple', label: 'Multiple Services' },
  { value: 'other', label: 'Other' },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(form: FormData): FormErrors {
    const e: FormErrors = {};
    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const phone = form.get('phone') as string;
    const service = form.get('service') as string;
    const message = form.get('message') as string;

    if (!name?.trim()) e.name = 'Full name is required';
    if (!email?.trim()) {
      e.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!phone?.trim()) {
      e.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s()-]{8,15}$/.test(phone.trim())) {
      e.phone = 'Please enter a valid phone number';
    }
    if (!service) e.service = 'Please select a service';
    if (!message?.trim()) e.message = 'Please describe your requirements';

    return e;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    try {
      // FormSubmit.co integration
      // Replace YOUR_EMAIL_ADDRESS with the actual business email
      const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL_ADDRESS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-16 px-6"
      >
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mb-5">
          <CircleCheck className="w-7 h-7 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Enquiry Received
        </h3>
        <p className="text-text-secondary text-[0.9375rem] max-w-sm">
          Thanks for reaching out. We'll review your requirements and get back to you.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Consultation Request - HiTaxSaver" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          error={errors.name}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          error={errors.phone}
        />
        <Input
          label="Business / Company Name"
          name="company"
          type="text"
          placeholder="Your business name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Select
          label="Customer Type"
          name="customer_type"
          options={CUSTOMER_TYPES}
          placeholder="Select your category"
        />
        <Select
          label="Service Required"
          name="service"
          required
          options={SERVICES}
          placeholder="Select a service"
          error={errors.service}
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        required
        placeholder="Tell us what you need help with, your business type and any current accounting or compliance requirements."
        error={errors.message}
      />

      <p className="text-xs text-text-muted leading-relaxed">
        Do not submit PAN, Aadhaar, passwords, OTPs or confidential financial documents through this public form.
      </p>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 text-error text-sm font-medium"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            Something went wrong. Please try again or contact us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        loading={status === 'loading'}
        className="w-full md:w-auto"
      >
        Request Consultation
      </Button>
    </form>
  );
}
