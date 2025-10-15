import { Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface LoadBalancingProps {
  onNavigate: (page: string) => void;
}

export default function LoadBalancing({ onNavigate }: LoadBalancingProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'f5',
      name: 'F5',
      logo: '/Screenshot 2025-10-13 105652.png',
      tagline: 'Distributed Cloud API Security',
      description: 'F5 specializes in Distributed Cloud API Security with a focus on Zero Trust Security to prevent unauthorized access to networks, applications, and APIs.',
      features: [
        'Distributed Cloud API Security',
        'Zero Trust Security architecture',
        'Prevent unauthorized access to networks, applications, and APIs',
        'Application delivery controller (ADC) solutions',
        'Advanced traffic management and load balancing',
        'Web application firewall (WAF) protection',
        'SSL/TLS offloading and optimization',
        'Global server load balancing (GSLB)'
      ],
      benefits: [
        'Industry-leading performance and reliability',
        'Multi-cloud and hybrid cloud support',
        'Advanced security and DDoS protection',
        'Programmable with iRules for custom traffic policies',
        'Comprehensive observability and analytics'
      ]
    },
    {
      id: 'kemp',
      name: 'Progress Kemp',
      logo: '/Screenshot 2025-10-13 105529.png',
      tagline: 'Highly Available, Highly Secure Applications',
      description: 'Progress Kemp delivers highly available and highly secure applications with load balancing solutions designed for hybrid cloud ecosystems.',
      features: [
        'Highly available and highly secure applications',
        'Load balancing across hybrid cloud ecosystem',
        'Application-layer load balancing',
        'SSL/TLS termination and re-encryption',
        'Content switching and caching',
        'Health monitoring and failover',
        'Real-time analytics and reporting',
        'RESTful API for automation'
      ],
      benefits: [
        'Cost-effective alternative to enterprise ADCs',
        'Easy deployment and management',
        'Flexible licensing options',
        'Support for containerized applications',
        'Integration with DevOps workflows'
      ]
    }
  ];

  const renderProductCard = (product: typeof products[0]) => (
    <div
      key={product.id}
      onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
      className={`bg-white border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
        selectedProduct === product.id
          ? 'border-[#129F4C] shadow-xl'
          : 'border-gray-200 hover:border-[#129F4C] hover:shadow-lg'
      }`}
    >
      <div className="p-8">
        <div className="h-24 flex items-center justify-center mb-6">
          <img
            src={product.logo}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold text-black mb-3 text-center">{product.name}</h3>
        <p className="text-sm text-[#129F4C] font-semibold mb-4 text-center">{product.tagline}</p>

        {selectedProduct === product.id && (
          <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h4 className="font-bold text-black mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#129F4C] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#129F4C] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-[#8eff7a]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Load Balancing & <span className="text-[#8eff7a]">ADC</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              High-availability application delivery with F5 and leading ADC technologies for optimal performance and security
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-black mb-4">
                Enterprise Load Balancing Solutions
              </h2>
              <p className="text-gray-600 text-lg">
                Click on any product to view detailed features, benefits, and capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map(product => renderProductCard(product))}
            </div>

            <div className="mt-16 bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Why Load Balancing Matters</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold text-black mb-2">High Availability</h4>
                  <p className="text-sm">Eliminate single points of failure and ensure your applications are always accessible to users.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Performance Optimization</h4>
                  <p className="text-sm">Distribute traffic intelligently across servers to maximize throughput and minimize latency.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Security Enhancement</h4>
                  <p className="text-sm">Protect applications with integrated WAF, DDoS mitigation, and SSL/TLS termination.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Scalability</h4>
                  <p className="text-sm">Easily scale your infrastructure to handle growing traffic demands without downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Need Help Choosing the Right Load Balancer?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Our F5-certified engineers will assess your requirements and recommend the best solution for your infrastructure
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all"
          >
            Speak with an Expert
          </button>
        </div>
      </section>
    </div>
  );
}
