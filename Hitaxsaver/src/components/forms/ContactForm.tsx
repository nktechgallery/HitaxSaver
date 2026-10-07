import { useRef, useState, type FormEvent } from 'react';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { Button } from '../ui/Button';
import { CircleCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_EMAIL } from '../../constants/seo';

const SERVICES = [
  { value: 'Accounting', label: 'Accounting' },
  { value: 'Auditing', label: 'Auditing' },
  { value: 'GST Compliance', label: 'GST Compliance' },
  { value: 'Income Tax Compliance', label: 'Income Tax Compliance' },
  { value: 'TDS Compliance', label: 'TDS Compliance' },
  { value: 'General Enquiry', label: 'General Enquiry' },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _subject: string;
  _template: string;
  _honey: string;
}

interface FormSubmitResponse {
  success?: string | boolean;
  message?: string;
}

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${BUSINESS_EMAIL}`;
const SUCCESS_MESSAGE =
  "Thanks for reaching out. We'll review your requirements and get back to you.";
const ERROR_MESSAGE =
  'Something went wrong while sending your enquiry. Please try again or contact us directly.';

function getString(form: FormData, key: string) {
  return String(form.get(key) ?? '').trim();
}

function isAcceptedFormSubmitResponse(data: FormSubmitResponse) {
  return data.success === true || data.success === 'true';
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState('');

  function validate(form: FormData): { errors: FormErrors; payload: ContactPayload } {
    const e: FormErrors = {};
    const name = getString(form, 'name');
    const email = getString(form, 'email');
    const phone = getString(form, 'phone');
    const service = getString(form, 'service');
    const message = getString(form, 'message');
    const honey = getString(form, '_honey');

    if (!name) e.name = 'Please enter your full name.';
    if (!email) {
      e.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!phone) {
      e.phone = 'Mobile number is required.';
    } else if (!/^(?:\+91)?[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))) {
      e.phone = 'Enter a valid Indian mobile number, e.g. 9876543210 or +919876543210.';
    }
    if (!service) e.service = 'Please select a service.';
    if (!message) e.message = 'Please describe your requirements.';

    return {
      errors: e,
      payload: {
        name,
        email,
        phone,
        service,
        message,
        _subject: 'New enquiry from HitaxSaver website',
        _template: 'table',
        _honey: honey,
      },
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const formData = new FormData(event.currentTarget);
    const { errors: validationErrors, payload } = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('idle');
      setFeedback('Please fix the highlighted fields and try again.');
      return;
    }

    setErrors({});
    submittingRef.current = true;
    setFeedback('');
    setStatus('submitting');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as FormSubmitResponse | null;

      if (!response.ok || !data || !isAcceptedFormSubmitResponse(data)) {
        const providerMessage = typeof data?.message === 'string' ? data.message.trim() : '';
        throw new Error(
          providerMessage
            ? `FormSubmit: ${providerMessage}`
            : response.status === 429
              ? 'Too many enquiries were sent recently. Please wait a few minutes and try again.'
              : `The enquiry service could not accept your request (HTTP ${response.status}). Please try again or contact us directly.`,
        );
      }

      formRef.current?.reset();
      setStatus('success');
      setFeedback(SUCCESS_MESSAGE);
    } catch (error) {
      setStatus('error');
      setFeedback(
        error instanceof TypeError
          ? 'Unable to connect to the enquiry service. Check your internet connection and try again. If it continues, contact us directly.'
          : error instanceof Error ? error.message : ERROR_MESSAGE,
      );
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <form
      ref={formRef}
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
        aria-hidden="true"
      />
      <input type="hidden" name="_subject" value="New enquiry from HitaxSaver website" />
      <input type="hidden" name="_template" value="table" />

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
          label="Mobile Number"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          error={errors.phone}
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
        {feedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            role={status === 'error' ? 'alert' : 'status'}
            aria-live="polite"
            className={`flex items-center gap-2 text-sm font-medium ${
              status === 'success' ? 'text-success' : status === 'error' ? 'text-error' : 'text-text-secondary'
            }`}
          >
            {status === 'success' ? (
              <CircleCheck className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        loading={status === 'submitting'}
        disabled={status === 'submitting'}
        className="w-full md:w-auto"
      >
        {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
      </Button>
    </form>
  );
}
