import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 bg-white p-3 rounded-lg inline-block">
              <img
                src="/image.png"
                alt="Malcam Solutions"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              From Networks to Apps—One Partner for Modern IT. Delivering enterprise-grade solutions across South Africa since 2018.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('services-networking')} className="hover:text-[#8eff7a] transition-colors">
                  Networking & Security
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services-adc')} className="hover:text-[#8eff7a] transition-colors">
                  Load Balancing/ADC
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services-monitoring')} className="hover:text-[#8eff7a] transition-colors">
                  Monitoring & Observability
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('software-development')} className="hover:text-[#8eff7a] transition-colors">
                  Software Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('whatsapp-solutions')} className="hover:text-[#8eff7a] transition-colors">
                  WhatsApp Business Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#8eff7a] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#8eff7a] transition-colors">
                  Partners & Vendors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#8eff7a] transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-[#8eff7a] transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#8eff7a] transition-colors">
                  Blog & Resources
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-[#8eff7a] transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('support')} className="hover:text-[#8eff7a] transition-colors">
                  Support & SLAs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-4">CONTACT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#8eff7a]" />
                <a href="mailto:sales@malcam.co.za" className="hover:text-[#8eff7a] transition-colors">
                  sales@malcam.co.za
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#8eff7a]" />
                <a href="tel:+27120042486" className="hover:text-[#8eff7a] transition-colors">
                  (+27) 012 004 2486
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#8eff7a]" />
                <span>Kosmosdal, Centurion, South Africa</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#8eff7a] hover:text-black transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#8eff7a] hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Malcam Technologies (Pty) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-[#8eff7a] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-[#8eff7a] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('cookies')} className="hover:text-[#8eff7a] transition-colors">
              Cookie Policy
            </button>
            <button onClick={() => onNavigate('popia')} className="hover:text-[#8eff7a] transition-colors">
              POPIA Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
