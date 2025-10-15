import { useState, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import WhatsAppSolutions from './pages/WhatsAppSolutions';
import NetworkingSecurity from './pages/NetworkingSecurity';
import LoadBalancing from './pages/LoadBalancing';
import Monitoring from './pages/Monitoring';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import SimplePage from './pages/SimplePage';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import POPIA from './pages/POPIA';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page);
  }, []);

  const currentPageContent = useMemo(() => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'services-networking':
        return <NetworkingSecurity onNavigate={handleNavigate} />;
      case 'services-adc':
        return <LoadBalancing onNavigate={handleNavigate} />;
      case 'services-monitoring':
        return <Monitoring onNavigate={handleNavigate} />;
      case 'software-development':
        return <SoftwareDevelopment onNavigate={handleNavigate} />;
      case 'whatsapp-solutions':
        return <WhatsAppSolutions onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudies onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'products':
      case 'partners':
        return <Products onNavigate={handleNavigate} />;
      case 'industries':
        return <Industries onNavigate={handleNavigate} />;
      case 'careers':
        return <Careers onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'support':
        return <Support onNavigate={handleNavigate} />;
      case 'privacy':
        return <Privacy onNavigate={handleNavigate} />;
      case 'terms':
        return <Terms onNavigate={handleNavigate} />;
      case 'cookies':
        return <Cookies onNavigate={handleNavigate} />;
      case 'popia':
        return <POPIA onNavigate={handleNavigate} />;
      default:
        return (
          <SimplePage
            title="Page Coming Soon"
            subtitle="This page is currently under construction"
            onNavigate={handleNavigate}
          >
            <div className="text-center py-12">
              <p className="text-gray-600 mb-8 text-lg">
                We're working on bringing you more content. In the meantime, explore our other pages or get in touch.
              </p>
              <button
                onClick={() => handleNavigate('contact')}
                className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </SimplePage>
        );
    }
  }, [currentPage, handleNavigate]);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main key={currentPage}>{currentPageContent}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
