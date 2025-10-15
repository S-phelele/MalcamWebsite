import { Building2, CreditCard, Hotel, ShoppingCart, Radio, CheckCircle, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const industries = [
    {
      icon: Building2,
      name: 'Public Sector',
      description: 'Government and public institutions require secure, compliant, and reliable infrastructure.',
      painPoints: [
        'Legacy systems requiring modernization and integration',
        'Strict compliance and security requirements (POPIA, PAIA)',
        'Budget constraints with need for long-term reliability'
      ],
      solutions: [
        'Network infrastructure upgrades with Cisco and Juniper',
        'F5 Load Balancers for critical application availability',
        'Full-stack observability for proactive monitoring'
      ],
      caseStudy: {
        client: 'Provincial Government Department',
        challenge: 'Aging network infrastructure causing service disruptions and security vulnerabilities',
        solution: 'Deployed Fortinet security appliances with F5 LTM for application delivery, implementing comprehensive monitoring',
        result: '99.9% uptime achieved, security incidents reduced by 85%, citizen service delivery improved significantly'
      }
    },
    {
      icon: CreditCard,
      name: 'Financial Services',
      description: 'Banks, insurance, and fintech need ultra-reliable systems with zero tolerance for downtime.',
      painPoints: [
        'Zero-downtime requirements for critical banking applications',
        'Complex regulatory compliance (PCI-DSS, FICA, POPIA)',
        'High-volume transaction processing with millisecond latency'
      ],
      solutions: [
        'F5 GTM/LTM for global traffic management and high availability',
        'Advanced security with Fortinet and F5 ASM/AFM modules',
        'Real-time monitoring and observability for transaction flows'
      ],
      caseStudy: {
        client: 'Major South African Bank',
        challenge: 'Mobile banking platform experiencing latency issues during peak hours, affecting customer experience',
        solution: 'Implemented F5 LTM with custom I-Rules for intelligent traffic distribution and AVI load balancers for containerized services',
        result: 'Response times improved by 60%, handled 3x peak load capacity, zero downtime during deployment'
      }
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      description: 'Hotels and resorts need reliable guest services and seamless communication platforms.',
      painPoints: [
        'Guest WiFi performance and security concerns',
        'Integration between booking, PMS, and guest services',
        'Seasonal traffic spikes requiring flexible infrastructure'
      ],
      solutions: [
        'Arista/Cisco networking for high-density WiFi coverage',
        'WhatsApp Business API via Broadcastly for guest communications',
        'Cloud infrastructure with auto-scaling capabilities'
      ],
      caseStudy: {
        client: 'Luxury Hotel Group',
        challenge: 'Fragmented guest communication across email, SMS, and phone, leading to slow response times',
        solution: 'Deployed Broadcastly WhatsApp platform integrated with PMS, enabling automated booking confirmations and 24/7 guest support',
        result: 'Guest satisfaction scores increased 40%, staff efficiency improved 50%, booking confirmation time reduced from hours to seconds'
      }
    },
    {
      icon: ShoppingCart,
      name: 'Retail',
      description: 'E-commerce and retail chains require always-on platforms with seamless customer engagement.',
      painPoints: [
        'E-commerce platform stability during sale events (Black Friday)',
        'Inventory synchronization across online and physical stores',
        'Customer engagement and notification at scale'
      ],
      solutions: [
        'F5 ADC for e-commerce platform load balancing',
        'Custom web and mobile app development with real-time sync',
        'Broadcastly for order notifications, shipping updates, and promotions'
      ],
      caseStudy: {
        client: 'National Retail Chain',
        challenge: 'Website crashes during promotional events, losing millions in revenue and damaging brand reputation',
        solution: 'Implemented F5 LTM with AFM security, developed progressive web app, deployed Broadcastly for customer notifications',
        result: 'Handled Black Friday traffic 5x higher than previous peak, zero downtime, 250% increase in mobile conversions, WhatsApp open rates at 98%'
      }
    },
    {
      icon: Radio,
      name: 'Telecommunications',
      description: 'Telcos and ISPs need carrier-grade infrastructure with massive scale and reliability.',
      painPoints: [
        'Carrier-grade reliability (99.999% uptime) requirements',
        'Massive subscriber base with complex billing and provisioning',
        'Network congestion and capacity planning challenges'
      ],
      solutions: [
        'Juniper and Huawei carrier-grade networking equipment',
        'F5 GTM for DNS and global traffic steering',
        'Custom OSS/BSS integration and subscriber management platforms'
      ],
      caseStudy: {
        client: 'Regional Telecommunications Provider',
        challenge: 'Subscriber portal experiencing performance degradation, manual provisioning causing delays, lack of visibility into network health',
        solution: 'Deployed F5 Big-IQ centralized management, custom subscriber portal with API integration, comprehensive monitoring stack',
        result: 'Portal response times improved 75%, provisioning time reduced from 48 hours to 15 minutes, proactive issue detection reduced outages by 60%'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry-Specific <span className="text-[#8eff7a]">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tailored IT infrastructure and software solutions addressing the unique challenges of your industry
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Sectors We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Deep expertise in solving sector-specific technology challenges
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 hover:border-[#8eff7a] hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-3">{industry.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                    </div>

                    <div className="md:w-2/3 space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-black mb-3 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          Pain Points
                        </h4>
                        <ul className="space-y-2">
                          {industry.painPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <span className="text-red-500 mr-2 mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-black mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#8eff7a] mr-2" />
                          Our Solutions
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <span className="text-[#8eff7a] mr-2 mt-1">•</span>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-[#8eff7a] rounded-lg p-6">
                        <h4 className="font-bold text-black mb-2">Client Success Story</h4>
                        <p className="text-sm text-gray-500 mb-3">{industry.caseStudy.client}</p>
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-700">
                            <span className="font-semibold">Challenge:</span> {industry.caseStudy.challenge}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Solution:</span> {industry.caseStudy.solution}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Result:</span> {industry.caseStudy.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Solve Your Industry Challenges?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can address your specific sector requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => onNavigate('case-studies')}
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all flex items-center justify-center"
            >
              View All Case Studies <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
