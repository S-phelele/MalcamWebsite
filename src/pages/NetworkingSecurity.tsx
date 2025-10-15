import { Network, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface NetworkingSecurityProps {
  onNavigate: (page: string) => void;
}

export default function NetworkingSecurity({ onNavigate }: NetworkingSecurityProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const networkProducts = [
    {
      id: 'arista',
      name: 'Arista Networks',
      logo: '/arista-networks-logo-1-300x64.png',
      tagline: 'Leader in Cloud Networking',
      description: 'Arista Networks delivers Universal Cloud Network architectures from 10G to 400G, providing exceptional performance and scalability for modern data centers.',
      features: [
        'Universal Cloud Network architectures from 10G to 400G',
        'Arista EOS - open, programmable, and resilient state-sharing architecture',
        'Software-driven cloud networking solutions',
        'High-performance data center switching',
        'Advanced network automation and programmability'
      ]
    },
    {
      id: 'cisco',
      name: 'Cisco',
      logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg',
      tagline: 'Comprehensive IT Solutions',
      description: 'Cisco provides end-to-end networking solutions that help deliver exceptional customer experiences and drive digital transformation.',
      features: [
        'Cisco Full-Stack Observability (FSO) platform',
        'Enterprise networking and security solutions',
        'SD-WAN and intent-based networking',
        'Collaboration and communication tools',
        'Advanced threat protection and security'
      ]
    },
    {
      id: 'dell',
      name: 'Dell Technologies',
      logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg',
      tagline: 'Infrastructure for Digital Transformation',
      description: 'Dell offers infrastructure solutions designed for multicloud environments, artificial intelligence, machine learning, IoT, and edge computing.',
      features: [
        'IT infrastructure deliverable on-demand, as a service',
        'Support for multicloud environments',
        'AI and machine learning infrastructure',
        'IoT and edge computing solutions',
        'Scalable storage and compute platforms'
      ]
    },
    {
      id: 'huawei',
      name: 'Huawei',
      logo: 'https://cdn.worldvectorlogo.com/logos/huawei-2.svg',
      tagline: 'Green ICT Solutions',
      description: 'Huawei is committed to continuously innovating cutting-edge solutions with a focus on sustainable and efficient ICT infrastructure.',
      features: [
        'Green ICT solutions for sustainable operations',
        'Cutting-edge network infrastructure',
        'Data center and cloud solutions',
        'Enterprise networking equipment',
        'Innovation in 5G and next-gen technologies'
      ]
    }
  ];

  const securityProducts = [
    {
      id: 'juniper',
      name: 'Juniper Networks',
      logo: 'https://cdn.worldvectorlogo.com/logos/juniper-networks-1.svg',
      tagline: 'AI-Native Networking Platform',
      description: 'Juniper introduces the AI-Native Networking Platform, partnering with HPE to advance AI in networking and make every connection count.',
      features: [
        'AI-Native Networking Platform',
        'Advanced threat intelligence and prevention',
        'Secure access and zero trust solutions',
        'Cloud-delivered security services',
        'Network security and firewall solutions'
      ]
    },
    {
      id: 'fortinet',
      name: 'Fortinet',
      logo: '/ftnt-logo_800x420-300x158.png',
      tagline: 'Converged Networking and Security',
      description: 'Fortinet is a leader in enterprise wired and wireless LAN infrastructure, offering converged networking and security solutions across edges, users, and devices.',
      features: [
        'Enterprise wired and wireless LAN infrastructure',
        'Converged networking and security solution',
        'FortiGate next-generation firewalls',
        'Secure networking across edges, users, and devices',
        'Integrated security fabric architecture'
      ]
    },
    {
      id: 'sophos',
      name: 'Sophos',
      logo: '/sophos-300x158.png',
      tagline: 'Managed Detection and Response',
      description: 'Sophos offers Managed Detection and Response (MDR) services providing an instant Security Operations Center compatible with existing IT infrastructure.',
      features: [
        'Managed Detection and Response (MDR) services',
        'Instant Security Operations Center',
        'Compatible with existing IT infrastructure',
        'Endpoint protection and encryption',
        '24/7 threat hunting and response'
      ]
    }
  ];

  const renderProductCard = (product: typeof networkProducts[0]) => (
    <div
      key={product.id}
      onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
      className={`bg-white border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
        selectedProduct === product.id
          ? 'border-[#129F4C] shadow-xl scale-105'
          : 'border-gray-200 hover:border-[#129F4C] hover:shadow-lg'
      }`}
    >
      <div className="p-6">
        <div className="h-20 flex items-center justify-center mb-4">
          <img
            src={product.logo}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-black mb-2 text-center">{product.name}</h3>
        <p className="text-sm text-[#129F4C] font-semibold mb-3 text-center">{product.tagline}</p>

        {selectedProduct === product.id && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#129F4C] mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
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
              <Network className="w-12 h-12 text-[#8eff7a] mr-4" />
              <Shield className="w-12 h-12 text-[#8eff7a]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Networking & <span className="text-[#8eff7a]">Security</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Enterprise network infrastructure with vendor-certified security solutions from industry-leading partners
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
                <Network className="w-8 h-8 text-[#129F4C] mr-3" />
                Network Solutions
              </h2>
              <p className="text-gray-600">
                Click on any product to view detailed features and capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {networkProducts.map(product => renderProductCard(product))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-4 flex items-center">
                <Shield className="w-8 h-8 text-[#129F4C] mr-3" />
                Security Solutions
              </h2>
              <p className="text-gray-600">
                Click on any product to view detailed features and capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityProducts.map(product => renderProductCard(product))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Network Infrastructure?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Our certified engineers will help design and implement the perfect networking and security solution for your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
