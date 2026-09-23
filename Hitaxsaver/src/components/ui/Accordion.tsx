import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className={cn('border-b border-border', index === 0 && 'border-t')}>
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-start justify-between gap-4 py-5 text-left',
          'transition-colors duration-150',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500',
          'group'
        )}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'text-base font-medium text-text-primary transition-colors duration-150',
            'md:text-[1.0625rem]',
            isOpen && 'text-purple-700'
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            'mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-sm',
            'transition-colors duration-150',
            isOpen ? 'text-purple-700' : 'text-text-muted'
          )}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-8 text-text-secondary text-[0.9375rem] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
