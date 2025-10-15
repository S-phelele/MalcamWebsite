import { ExternalLink } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const vendors = [
    {
      name: 'Microsoft',
      logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
      description: 'Computer software and cloud computing services',
      website: 'https://www.microsoft.com'
    },
    {
      name: 'Fortinet',
      logo: '/ftnt-logo_800x420-300x158.png',
      description: 'Network security and converged networking solutions',
      website: 'https://www.fortinet.com'
    },
    {
      name: 'F5',
      logo: '/Screenshot 2025-10-13 105652.png',
      description: 'API security, application performance, and Zero Trust security',
      website: 'https://www.f5.com'
    },
    {
      name: 'Juniper Networks',
      logo: 'https://cdn.worldvectorlogo.com/logos/juniper-networks-1.svg',
      description: 'AI-Native Networking platforms',
      website: 'https://www.juniper.net'
    },
    {
      name: 'Cisco',
      logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg',
      description: 'IT infrastructure, security, and observability solutions',
      website: 'https://www.cisco.com'
    },
    {
      name: 'Arista Networks',
      logo: '/arista-networks-logo-1-300x64.png',
      description: 'Cloud networking and high-performance network architectures',
      website: 'https://www.arista.com'
    },
    {
      name: 'Sophos',
      logo: '/sophos-300x158.png',
      description: 'Cybersecurity and managed detection/response services',
      website: 'https://www.sophos.com'
    },
    {
      name: 'Dell',
      logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg',
      description: 'Infrastructure and multicloud solutions',
      website: 'https://www.dell.com'
    },
    {
      name: 'Huawei',
      logo: 'https://cdn.worldvectorlogo.com/logos/huawei-2.svg',
      description: 'ICT innovation and green technology solutions',
      website: 'https://www.huawei.com'
    },
    {
      name: 'Progress',
      logo: '/Screenshot 2025-10-13 105529.png',
      description: 'Network monitoring, load balancing, and observability solutions',
      website: 'https://www.progress.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology <span className="text-[#8eff7a]">Partners</span> & Products
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Certified partnerships with industry-leading vendors, delivering best-in-class solutions backed by expert support and implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Vendor Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We work with the world's leading technology vendors to provide comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-xl transition-all"
              >
                <div className="h-20 flex items-center justify-center mb-6">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const text = document.createElement('div');
                        text.className = 'text-gray-800 font-semibold text-center text-xl';
                        text.textContent = vendor.name;
                        parent.appendChild(text);
                      }
                    }}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">{vendor.name}</h3>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">{vendor.description}</p>
                <div className="text-center">
                  <a
                    href={vendor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#8eff7a] font-semibold hover:text-green-600 transition-colors text-sm"
                  >
                    Visit website <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black mb-6 text-center">F5 Expertise</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-center">
                Malcam has specialized expertise in F5 technologies with over 10 years of experience in application delivery and load balancing solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {['LTM', 'GTM', 'APM', 'AFM', 'ASM', 'AAM', 'Big-IQ', 'I-Rules'].map((module) => (
                  <div key={module} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <span className="font-semibold text-black">{module}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-[#8eff7a] rounded-lg p-6">
                <h3 className="font-bold text-black mb-3">Our F5 Capabilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8eff7a] mr-2">•</span>
                    <span>Complete solution design, planning, and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8eff7a] mr-2">•</span>
                    <span>Complex I-Rules writing and customization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8eff7a] mr-2">•</span>
                    <span>F5 Load Balancer support and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8eff7a] mr-2">•</span>
                    <span>AVI/VMWare NSX Advanced Load Balancer implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Our certified engineers can help you select and implement the best technology solutions for your needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
          >
            Speak with an Expert
          </button>
        </div>
      </section>
    </div>
  );
}
