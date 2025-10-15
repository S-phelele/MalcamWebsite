import { Network, Shield, Activity, Code, MessageCircle, Cloud, ArrowRight, CheckCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Network,
      title: 'Networking & Security',
      description: 'Enterprise network infrastructure with vendor-certified security solutions.',
      path: 'services-networking',
    },
    {
      icon: Shield,
      title: 'Load Balancing/ADC',
      description: 'High-availability application delivery with F5 and leading ADC technologies.',
      path: 'services-adc',
    },
    {
      icon: Activity,
      title: 'Monitoring & Observability',
      description: 'Full-stack visibility from infrastructure to application performance.',
      path: 'services-monitoring',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom web and mobile apps, APIs, and systems integration.',
      path: 'software-development',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business Solutions',
      description: 'Compliant customer engagement at scale with Broadcastly.',
      path: 'whatsapp-solutions',
    },
  ];

  const partners = [
    { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
    { name: 'Fortinet', logo: '/ftnt-logo_800x420-300x158.png' },
    { name: 'Juniper Networks', logo: 'https://cdn.worldvectorlogo.com/logos/juniper-networks-1.svg' },
    { name: 'Arista Networks', logo: '/arista-networks-logo-1-300x64.png' },
    { name: 'Cisco', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
    { name: 'F5', logo: '/Screenshot 2025-10-13 105652.png' },
    { name: 'Huawei', logo: 'https://cdn.worldvectorlogo.com/logos/huawei-2.svg' },
    { name: 'Dell', logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg' },
    { name: 'Sophos', logo: '/sophos-300x158.png' },
    { name: 'Progress', logo: '/Screenshot 2025-10-13 105529.png' }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '15+', label: 'Technology Partners' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#8eff7a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              From Networks to Apps—
              <span className="text-[#8eff7a]"> One Partner</span> for Modern IT
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Over 10 years of engineering experience in networking solutions, application delivery controllers, and network security. Vendor-certified expertise with F5, Fortinet, and other industry-leading partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105"
              >
                Talk to Solutions Team
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Comprehensive IT Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end solutions from infrastructure to application delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => onNavigate(service.path)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center text-[#8eff7a] font-semibold">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Malcam
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Delivering excellence through expertise, partnerships, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <CheckCircle className="w-12 h-12 text-[#8eff7a] mb-4" />
              <h3 className="text-xl font-bold mb-3">Engineering Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Over 10 years of deep technical expertise with vendor certifications. Specialized in F5 modules: LTM, GTM, APM, AFM, ASM, AAM, Big-IQ, and complex I-Rules writing.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <CheckCircle className="w-12 h-12 text-[#8eff7a] mb-4" />
              <h3 className="text-xl font-bold mb-3">Trusted Partners</h3>
              <p className="text-gray-400 leading-relaxed">
                Certified partnerships with 10+ industry leaders including Microsoft, F5, Fortinet, Cisco, Juniper, Arista, and more.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <CheckCircle className="w-12 h-12 text-[#8eff7a] mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Delivery</h3>
              <p className="text-gray-400 leading-relaxed">
                Complete solution design, planning, and deployment services. Expert support for F5 Load Balancers and AVI/VMWare NSX Advanced Load Balancer.
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-400 mb-8">TECHNOLOGY PARTNERS</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow min-h-[100px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const text = document.createElement('div');
                      text.className = 'text-gray-800 font-semibold text-center';
                      text.textContent = partner.name;
                      parent.appendChild(text);
                    }
                  }}
                  className="max-w-full max-h-16 w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals with our comprehensive solutions.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
