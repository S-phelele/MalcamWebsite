import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    { label: 'Networking & Security', path: 'services-networking' },
    { label: 'Load Balancing/ADC', path: 'services-adc' },
    { label: 'Monitoring & Observability', path: 'services-monitoring' },
    { label: 'Software Development', path: 'software-development' },
    { label: 'WhatsApp Business (Broadcastly)', path: 'whatsapp-solutions' },
  ];

  return (
    <header className="bg-white text-black sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="/image.png"
              alt="Malcam Solutions"
              className="h-12 w-auto"
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'home' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('services')}
                className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all flex items-center ${
                  currentPage === 'services' || currentPage.startsWith('services-') || currentPage === 'software-development' || currentPage === 'whatsapp-solutions' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => {
                        onNavigate(service.path);
                        setServicesDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#129F4C] transition-colors"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('products')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'products' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              Products
            </button>

            <button
              onClick={() => onNavigate('case-studies')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'case-studies' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => onNavigate('industries')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'industries' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'blog' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => onNavigate('careers')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'careers' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              Careers
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all ${
                currentPage === 'about' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700'
              }`}
            >
              About
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#129F4C] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all ml-2"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#129F4C] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'home' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                currentPage === 'services' || currentPage.startsWith('services-') || currentPage === 'software-development' || currentPage === 'whatsapp-solutions' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-2 space-y-2 bg-gray-50 py-2 rounded-lg">
                {services.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => { onNavigate(service.path); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                    className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:text-[#129F4C] transition-colors"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'products' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => { onNavigate('case-studies'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'case-studies' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => { onNavigate('industries'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'industries' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Industries
            </button>
            <button
              onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'blog' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => { onNavigate('careers'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'careers' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 'about' ? 'text-[#129F4C] bg-green-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
            </button>
            <button
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className="mt-4 w-full bg-[#129F4C] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
