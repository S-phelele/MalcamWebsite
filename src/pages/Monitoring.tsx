import { Activity, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface MonitoringProps {
  onNavigate: (page: string) => void;
}

export default function Monitoring({ onNavigate }: MonitoringProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'whatsup-gold',
      name: 'Progress WhatsUp Gold',
      logo: '/Screenshot 2025-10-13 105529.png',
      tagline: 'Network Monitoring for On-Premise and Cloud',
      description: 'Progress WhatsUp Gold is a comprehensive network monitoring tool designed for both on-premise and cloud environments, helping organizations avoid downtime with interactive topology mapping.',
      features: [
        'Network monitoring for on-premise and cloud environments',
        'Interactive topology mapping and visualization',
        'Real-time network performance monitoring',
        'Automated device discovery and mapping',
        'Comprehensive alerting and notifications',
        'Application and server monitoring',
        'Bandwidth and traffic analysis',
        'Customizable dashboards and reports',
        'SNMP, WMI, and API monitoring'
      ],
      benefits: [
        'Avoid costly network downtime',
        'Quickly identify and resolve issues',
        'Comprehensive visibility across hybrid infrastructure',
        'Easy to deploy and configure',
        'Scalable for networks of all sizes'
      ],
      useCases: [
        'Enterprise network monitoring',
        'Data center infrastructure management',
        'Cloud and hybrid environment monitoring',
        'Application performance tracking',
        'Compliance reporting and auditing'
      ]
    },
    {
      id: 'flowmon',
      name: 'Progress Flowmon',
      logo: '/Screenshot 2025-10-13 105529.png',
      tagline: 'Network Detection and Response (NDR)',
      description: 'Progress Flowmon is a Network Detection and Response (NDR) solution providing intelligent network visibility and security monitoring to reduce risk and improve resilience.',
      features: [
        'Network Detection and Response (NDR) solution',
        'Intelligent network visibility and security monitoring',
        'Advanced threat detection and analysis',
        'Network behavior anomaly detection',
        'Deep packet inspection and flow analysis',
        'Encrypted traffic analysis',
        'Forensic investigation capabilities',
        'Integration with SIEM and security tools',
        'Compliance and audit reporting'
      ],
      benefits: [
        'Reduce security risk and improve resilience',
        'Detect threats that bypass traditional security',
        'Accelerate incident response and investigation',
        'Gain deep visibility into network traffic',
        'Meet compliance requirements effectively'
      ],
      useCases: [
        'Cybersecurity threat detection',
        'Network forensics and investigation',
        'Insider threat monitoring',
        'Compliance monitoring (PCI DSS, GDPR, HIPAA)',
        'DDoS attack detection and mitigation'
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

            <div className="mb-6">
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

            <div>
              <h4 className="font-bold text-black mb-3">Use Cases:</h4>
              <ul className="space-y-2">
                {product.useCases.map((useCase, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#129F4C] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{useCase}</span>
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
              <Activity className="w-12 h-12 text-[#8eff7a]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Monitoring & <span className="text-[#8eff7a]">Observability</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Full-stack visibility from infrastructure to application performance with comprehensive monitoring and security analytics
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-black mb-4">
                Enterprise Monitoring Solutions
              </h2>
              <p className="text-gray-600 text-lg">
                Click on any product to view detailed features, benefits, and use cases
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map(product => renderProductCard(product))}
            </div>

            <div className="mt-16 bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Why Monitoring & Observability Are Critical</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold text-black mb-2">Proactive Issue Detection</h4>
                  <p className="text-sm">Identify and resolve issues before they impact users, reducing downtime and maintaining service quality.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Security Visibility</h4>
                  <p className="text-sm">Detect security threats, anomalies, and unauthorized access attempts in real-time.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Performance Optimization</h4>
                  <p className="text-sm">Understand resource utilization patterns and optimize infrastructure for peak performance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Compliance & Auditing</h4>
                  <p className="text-sm">Meet regulatory requirements with comprehensive logging, reporting, and audit trails.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Faster Troubleshooting</h4>
                  <p className="text-sm">Reduce mean time to resolution (MTTR) with detailed visibility and forensic capabilities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Capacity Planning</h4>
                  <p className="text-sm">Make informed decisions about infrastructure scaling based on historical data and trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Gain Complete Visibility Into Your Infrastructure
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Let our monitoring specialists help you implement a comprehensive observability strategy for your environment
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all"
          >
            Request a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
