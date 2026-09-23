import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { NAV_LINKS, CTA_PRIMARY } from '../../constants/navigation';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { BRAND_ICON } from '../../constants/images';

export function Header() {
  const scrolled = useScrollHeader(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  function handleNavClick() {
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-[0_1px_3px_rgba(26,22,37,0.04)] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Wordmark */}
          <a
            href="/"
            className="group flex items-center gap-2 no-underline"
            onClick={handleNavClick}
            aria-label="HiTaxSaver home"
          >
            <img src={BRAND_ICON} alt="" className="h-10 w-10 object-contain" width="40" height="40" />
            <span className="flex items-baseline">
              <span className="text-xl font-bold tracking-tight text-text-primary">Hi</span>
              <span className="text-xl font-bold tracking-tight text-purple-700">TaxSaver</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium text-text-secondary no-underline',
                  'transition-colors duration-150',
                  'hover:text-purple-700',
                  'relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]',
                  'after:bg-purple-600 after:transition-all after:duration-200',
                  'hover:after:w-full'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" size="sm" showArrow>
              {CTA_PRIMARY}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'md:hidden flex items-center justify-center w-10 h-10 rounded-md',
              'text-text-primary transition-colors duration-150',
              'hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-purple-500'
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white md:hidden"
          >
            <div className="flex min-h-full flex-col px-5 pb-8 pt-6">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      'text-lg font-medium text-text-primary no-underline',
                      'py-3 px-4 rounded-lg',
                      'transition-colors duration-150',
                      'hover:bg-purple-50 hover:text-purple-700',
                      'active:bg-purple-100'
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  href="/contact"
                  size="lg"
                  showArrow
                  className="w-full justify-center"
                  onClick={handleNavClick}
                >
                  {CTA_PRIMARY}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
