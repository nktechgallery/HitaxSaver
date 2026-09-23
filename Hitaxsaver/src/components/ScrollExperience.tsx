import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';

export function ScrollExperience() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section:not([data-aos-skip])'));
    const details = Array.from(document.querySelectorAll<HTMLElement>(
      'main section article, main section form, main section [data-scroll-reveal]',
    ));
    const figures = Array.from(document.querySelectorAll<HTMLElement>('main section figure:not([data-aos-skip])'));

    sections.forEach((element) => element.setAttribute('data-aos', 'fade-up'));
    details.forEach((element, index) => {
      element.setAttribute('data-aos', 'fade-up');
      element.setAttribute('data-aos-delay', String((index % 4) * 80));
    });
    figures.forEach((element) => element.setAttribute('data-aos', 'zoom-in'));

    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 72,
      anchorPlacement: 'top-bottom',
    });
    window.requestAnimationFrame(() => AOS.refreshHard());
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
