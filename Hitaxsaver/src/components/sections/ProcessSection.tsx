import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';
import frame1 from '../../images/process/01-tell-us.webp';
import frame2 from '../../images/process/02-document-review.webp';
import frame3 from '../../images/process/03-preparation.webp';
import frame4 from '../../images/process/04-review.webp';
import frame5 from '../../images/process/05-completion.webp';
import frame6 from '../../images/process/06-support.webp';

const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'We begin by understanding who you are, how your business operates and the accounting or tax support you need. This initial conversation helps us identify priorities, deadlines and the right scope of assistance for your circumstances.',
    image: frame1,
    alt: 'HiTaxSaver advisor listening to a client and understanding their requirements',
  },
  {
    number: '02',
    title: 'Document Review',
    description: 'We review the records you already maintain and identify the documents, filings and reconciliations required for the work. We also highlight missing information or pending responsibilities before preparation begins, helping reduce delays later in the process.',
    image: frame2,
    alt: 'HiTaxSaver advisor carefully reviewing organized client records',
  },
  {
    number: '03',
    title: 'Preparation',
    description: 'Using the available information, we organize and prepare the relevant accounts, returns, reconciliations or compliance documents. Figures are checked against supporting records so the work is structured, traceable and ready for the next review stage.',
    image: frame3,
    alt: 'HiTaxSaver advisor preparing accounts with a laptop and calculator',
  },
  {
    number: '04',
    title: 'Review',
    description: 'The prepared information is reviewed for completeness, consistency and obvious discrepancies before anything is finalized. Questions or missing details are clarified with you so that the final work reflects the records and agreed service requirements.',
    image: frame4,
    alt: 'HiTaxSaver advisor completing a detailed quality review',
  },
  {
    number: '05',
    title: 'Filing / Completion',
    description: 'Once the information has been reviewed and approved, we complete the applicable filing, reporting or documentation process within the agreed scope. You receive confirmation of completion together with any relevant records and practical next steps.',
    image: frame5,
    alt: 'HiTaxSaver advisor completing a digital compliance filing',
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description: 'Compliance continues beyond a single filing, so we help you stay aware of future requirements, recurring records and important deadlines. Ongoing support keeps your accounting information organized and makes the next compliance cycle easier to manage.',
    image: frame6,
    alt: 'HiTaxSaver advisor providing ongoing support and tracking future deadlines',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));
    setActiveStep((current) => (current === nextStep ? current : nextStep));
  });

  const step = steps[activeStep];

  return (
    <section className="bg-bg-warm py-20 md:py-24" data-aos-skip>
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow className="mb-4 justify-center">How It Works</Eyebrow>
          <h2 className="text-3xl font-bold text-text-primary md:text-[2.5rem] md:leading-[1.15]">
            A straightforward process, shown step by step.
          </h2>
          <p className="mt-4 text-text-secondary">
            Scroll through the journey to see how HiTaxSaver moves from understanding your needs to ongoing support.
          </p>
        </div>
      </Container>

      <div ref={sectionRef} className="relative h-[460vh] md:h-[560vh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden py-8 sm:py-12 md:h-screen md:py-20">
          <Container>
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_88px] lg:gap-8">
              <figure className="relative mx-auto h-[82svh] max-h-[720px] w-full max-w-5xl overflow-hidden rounded-md bg-[#211F26] shadow-[0_18px_45px_rgba(26,22,37,0.16)] sm:h-auto sm:aspect-[16/9] sm:rounded-lg" data-aos-skip>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={step.number}
                    src={step.image}
                    alt={step.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
                    width="1672"
                    height="940"
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 max-h-[58%] overflow-y-auto bg-gradient-to-t from-[#17151B]/98 via-[#17151B]/88 to-transparent px-4 pb-4 pt-16 sm:max-h-none sm:overflow-visible sm:px-8 sm:pb-8 sm:pt-32">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.figcaption
                      key={step.number}
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: reduceMotion ? 0 : 0.35 }}
                      className="max-w-2xl"
                    >
                      <p className="text-xs font-bold uppercase text-purple-300">Step {step.number}</p>
                      <h3 className="mt-1 text-lg font-bold !text-white sm:mt-2 sm:text-3xl">{step.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed !text-white/80 sm:mt-2 sm:text-base">{step.description}</p>
                    </motion.figcaption>
                  </AnimatePresence>
                </div>

                <div className="absolute left-0 top-0 h-1 bg-white/15 w-full" aria-hidden="true">
                  <motion.div
                    className="h-full origin-left bg-purple-400"
                    style={{ scaleX: scrollYProgress }}
                  />
                </div>
              </figure>

              <nav className="hidden lg:flex lg:flex-col lg:items-center lg:gap-3" aria-label="Process progress">
                {steps.map((item, index) => (
                  <div
                    key={item.number}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                      index === activeStep
                        ? 'border-purple-600 bg-purple-700 text-white shadow-md'
                        : index < activeStep
                          ? 'border-purple-200 bg-purple-100 text-purple-700'
                          : 'border-border bg-white text-text-muted'
                    }`}
                    aria-current={index === activeStep ? 'step' : undefined}
                  >
                    {item.number}
                  </div>
                ))}
              </nav>
            </div>
          </Container>
        </div>
      </div>

      <ol className="sr-only">
        {steps.map((item) => (
          <li key={item.number}>{item.number}. {item.title}: {item.description}</li>
        ))}
      </ol>
    </section>
  );
}
