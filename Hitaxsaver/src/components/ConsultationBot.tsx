import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Calculator, ClipboardCheck, FileText, MessageCircle, Receipt, Sparkles, X } from 'lucide-react';
import { BRAND_ICON } from '../constants/images';
import { WHATSAPP_LINK } from '../constants/seo';

const prompts = [
  'Need help getting your tax compliance back on track?',
  'Want clearer books and fewer filing surprises?',
  'Have a GST return or reconciliation question?',
  'Preparing an income tax return and unsure where to start?',
  'Need support with TDS filing and reconciliation?',
  'Looking for reliable monthly accounting support?',
];

const serviceAreas = [
  { icon: Calculator, title: 'Accounting support', copy: 'Bookkeeping, reconciliations and organized financial records.' },
  { icon: Receipt, title: 'GST compliance', copy: 'Registration, return preparation and reconciliation support.' },
  { icon: FileText, title: 'Income tax', copy: 'Return preparation and documentation support for individuals and businesses.' },
  { icon: ClipboardCheck, title: 'TDS compliance', copy: 'Calculation, payment tracking, filing and reconciliation assistance.' },
];

export function ConsultationBot() {
  const [open, setOpen] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [autoSuppressed, setAutoSuppressed] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  );
  const nextPrompt = useRef(1);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const suppressAutomaticOpen = () => {
      setAutoSuppressed(true);
      setOpen(false);
    };

    window.addEventListener('wheel', suppressAutomaticOpen, { passive: true, once: true });
    window.addEventListener('touchmove', suppressAutomaticOpen, { passive: true, once: true });
    return () => {
      window.removeEventListener('wheel', suppressAutomaticOpen);
      window.removeEventListener('touchmove', suppressAutomaticOpen);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('chatbot-open', open);
    return () => document.body.classList.remove('chatbot-open');
  }, [open]);

  useEffect(() => {
    if (autoSuppressed) return;

    const timeout = window.setTimeout(() => {
      setOpen((current) => {
        const nextOpen = !current;
        if (nextOpen) {
          setPromptIndex(nextPrompt.current);
          nextPrompt.current = (nextPrompt.current + 1) % prompts.length;
        }
        return nextOpen;
      });
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [autoSuppressed, open]);

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'tween' as const, duration: 1.05, ease: [0.16, 1, 0.3, 1] as const };

  const triggerTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 280, damping: 24 };

  function dismiss() {
    setAutoSuppressed(true);
    setOpen(false);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={dismiss}
            className="fixed inset-y-0 left-0 right-[33.333vw] z-[59] hidden cursor-default bg-text-primary/5 md:block"
            aria-label="Close consultation assistant"
          />
        )}
      </AnimatePresence>
      <aside
        className={open ? 'fixed inset-y-0 right-0 z-[60]' : 'fixed bottom-5 right-4 z-[60] sm:bottom-6 sm:right-6'}
        aria-live="polite"
      >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="consultation-panel"
            initial={reduceMotion ? false : { x: '100%', opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: '100%', opacity: 0.6 }}
            transition={panelTransition}
            className="flex h-dvh w-screen flex-col overflow-hidden border-l border-purple-200 bg-white shadow-[-18px_0_50px_rgba(26,22,37,0.16)] md:w-[33.333vw]"
            role="dialog"
            aria-label="HiTaxSaver consultation assistant"
          >
            <div className="z-10 flex flex-none items-center justify-between border-b border-border bg-purple-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <img src={BRAND_ICON} alt="" className="h-10 w-10 object-contain" width="40" height="40" />
                <div>
                  <p className="text-sm font-bold text-text-primary">HiTaxSaver Assistant</p>
                  <p className="text-xs text-success">Available on WhatsApp</p>
                </div>
              </div>
              <button
                type="button"
                onClick={dismiss}
                className="flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-white hover:text-text-primary"
                aria-label="Close consultation assistant"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md bg-purple-100 text-purple-700">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-purple-700">How can we help?</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={promptIndex}
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25 }}
                      className="mt-2 text-lg font-semibold leading-snug text-text-primary sm:text-xl"
                    >
                      {prompts[promptIndex]}
                    </motion.p>
                  </AnimatePresence>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    Share a brief summary of your requirement. HiTaxSaver can help identify the
                    information needed and discuss a practical next step with you.
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-border pt-6">
                <h2 className="text-base font-bold text-text-primary">What can you discuss?</h2>
                <div className="mt-4 space-y-4">
                  {serviceAreas.map((service) => (
                    <div key={service.title} className="flex gap-3">
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-bg-warm text-purple-700">
                        <service.icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">{service.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-text-muted">{service.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-md border border-border bg-bg-warm p-4">
                <p className="text-xs leading-relaxed text-text-secondary">
                  For your security, do not share PAN, Aadhaar, passwords, OTPs or confidential
                  documents in the first WhatsApp message.
                </p>
              </div>
            </div>

            <div className="flex-none border-t border-border bg-white p-4 sm:px-7 sm:py-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#168A45] px-5 py-3 text-sm font-bold !text-white shadow-sm transition-all hover:-translate-y-px hover:bg-[#11763A] hover:shadow-md"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Consult on WhatsApp
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="consultation-trigger"
            type="button"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
            transition={triggerTransition}
            onClick={() => setOpen(true)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white shadow-[0_12px_30px_rgba(76,50,168,0.35)] transition-colors hover:bg-purple-600 sm:h-16 sm:w-16"
            aria-label="Open HiTaxSaver consultation assistant"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success" />
          </motion.button>
        )}
      </AnimatePresence>
      </aside>
    </>
  );
}
