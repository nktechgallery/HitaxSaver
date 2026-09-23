import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { ServicesOverview } from './pages/ServicesOverview';
import { AboutPage, ContactPage, PrivacyPage, TermsPage } from './pages/SimplePages';
import { SERVICES } from './constants/services';
import { ScrollExperience } from './components/ScrollExperience';
import { ConsultationBot } from './components/ConsultationBot';

function getPath() {
  return window.location.pathname.endsWith('/') && window.location.pathname !== '/'
    ? window.location.pathname.slice(0, -1)
    : window.location.pathname;
}

function Router() {
  const path = getPath();
  const service = SERVICES.find((item) => path === `/services/${item.slug}`);

  if (service) return <ServicePage slug={service.slug} />;
  if (path === '/services') return <ServicesOverview />;
  if (path === '/about') return <AboutPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/privacy-policy') return <PrivacyPage />;
  if (path === '/terms-disclaimer') return <TermsPage />;
  return <Home />;
}

function App() {
  return (
    <>
      <div className="site-shell">
        <Header />
        <Router />
        <ScrollExperience />
        <Footer />
      </div>
      <ConsultationBot />
    </>
  );
}

export default App;
