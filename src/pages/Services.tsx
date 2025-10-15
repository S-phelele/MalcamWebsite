import { Network, Shield, Activity, Code, MessageCircle, Cloud, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Network,
      title: 'Networking & Security',
      description: 'Enterprise-grade network infrastructure design, implementation, and management. Vendor-certified security solutions including firewalls, VPNs, and intrusion prevention systems.',
      features: ['Network Architecture', 'Security Design', 'VPN Solutions', 'Firewall Management'],
      path: 'services-networking',
    },
    {
      icon: Shield,
      title: 'Load Balancing/ADC',
      description: 'Application Delivery Controllers for high availability and optimal performance. F5 certified solutions for traffic management and application security.',
      features: ['F5 BIG-IP', 'Traffic Management', 'SSL Offloading', 'Application Security'],
      path: 'services-adc',
    },
    {
      icon: Activity,
      title: 'Monitoring & Observability',
      description: 'Full-stack monitoring from SNMP to modern observability. Real-time visibility into infrastructure, applications, and user experience.',
      features: ['Infrastructure Monitoring', 'APM', 'Log Aggregation', 'Alerting & Dashboards'],
      path: 'services-monitoring',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built for reliability. Web apps, mobile apps, APIs, and systems integration designed for your networked world.',
      features: ['Web & Mobile Apps', 'API Development', 'System Integration', 'DevOps & CI/CD'],
      path: 'software-development',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business Solutions',
      description: 'Reach customers on WhatsApp at scale with compliance. Powered by Broadcastly, our dedicated platform for campaigns, templates, and automation.',
      features: ['Broadcast Campaigns', 'Template Management', 'Analytics', 'POPIA Compliance'],
      path: 'whatsapp-solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              From Networks to Apps—
              <span className="text-[#8eff7a]"> One Partner</span> for Modern IT
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive IT services delivered by vendor-certified engineers with 10+ years of experience across South Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end solutions from infrastructure to application delivery
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-[#8eff7a] rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => onNavigate(service.path)}
                        className="inline-flex items-center text-[#8eff7a] font-semibold hover:text-green-600 transition-colors group"
                      >
                        Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Why Choose Malcam
                </h2>
                <p className="text-gray-600 text-lg">
                  Delivering excellence through expertise, partnerships, and proven results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">10+</div>
                  <div className="text-gray-600">Years Engineering Depth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">8+</div>
                  <div className="text-gray-600">Vendor Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">100+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Certified partnerships with F5, Fortinet, Huawei, Dell, Arista, Cisco, and Sophos.
                  Delivering enterprise solutions across Public Sector, Financial Services, Hospitality, Retail, and Telecommunications.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105"
                >
                  Talk to Solutions Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
