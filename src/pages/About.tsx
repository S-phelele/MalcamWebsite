import { Award, Users, Target, TrendingUp } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering enterprise-grade solutions with vendor certifications and engineering depth.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with clients and technology partners.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Proven track record of successful project delivery across diverse industries.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Staying ahead with modern technologies and best practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#8eff7a]">Malcam</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your trusted partner for modern IT solutions across South Africa since 2018.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  Founded in 2018 by Annikie Malibe, Malcam Solutions started as a network security consultancy and ICT managed services company. Initially a one-person operation, we have grown into a comprehensive IT solutions provider serving clients across South Africa.
                </p>
                <p>
                  With over 10 years of engineering experience, our team brings deep technical expertise to every project. We specialize in networking solutions, application delivery controllers, and network security, with certified expertise in F5 modules including LTM, GTM, APM, AFM, ASM, AAM, and Big-IQ. Our engineers excel in complex I-Rules writing and complete solution design, planning, and deployment.
                </p>
                <p>
                  Today, we serve clients across diverse industries with expanded services including software solutions, IoT products, data center acceleration, online security, penetration testing, and business automation solutions. Our management team possesses specialized skills across all our service offerings.
                </p>
                <div className="mt-8 p-6 bg-gray-50 border-l-4 border-[#8eff7a] rounded">
                  <p className="font-bold text-black mb-2">Our Vision</p>
                  <p className="italic">"To be the leading company in the provision of technology in our chosen markets."</p>
                  <p className="font-bold text-black mb-2 mt-4">Our Mission</p>
                  <p className="italic">"We at Malcam Solution (Pty) Ltd strive to provide our clients with the most optimal, cost-effective and robust IT and business Solution."</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">100+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">10+</div>
                <div className="text-gray-600">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Values</h2>
              <p className="text-gray-600 text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black mb-6">Technology Partnerships</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We maintain certified partnerships with industry-leading vendors, ensuring our clients receive best-in-class solutions backed by expert support and implementation.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
                  { name: 'Fortinet', logo: '/ftnt-logo_800x420-300x158.png' },
                  { name: 'Juniper', logo: 'https://cdn.worldvectorlogo.com/logos/juniper-networks-1.svg' },
                  { name: 'Arista', logo: '/arista-networks-logo-1-300x64.png' },
                  { name: 'Cisco', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
                  { name: 'F5', logo: '/Screenshot 2025-10-13 105652.png' },
                  { name: 'Huawei', logo: 'https://cdn.worldvectorlogo.com/logos/huawei-2.svg' },
                  { name: 'Dell', logo: 'https://cdn.worldvectorlogo.com/logos/dell-2.svg' },
                  { name: 'Sophos', logo: '/sophos-300x158.png' },
                  { name: 'Progress', logo: '/Screenshot 2025-10-13 105529.png' }
                ].map((partner) => (
                  <div key={partner.name} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:border-[#8eff7a] transition-colors h-20">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const text = document.createElement('div');
                          text.className = 'text-gray-800 font-semibold text-center text-sm';
                          text.textContent = partner.name;
                          parent.appendChild(text);
                        }
                      }}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('partners')}
                className="text-[#8eff7a] font-semibold hover:text-green-600 transition-colors"
              >
                View Full Partner Portfolio →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Let's Work Together
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Discover how Malcam can help transform your IT infrastructure and deliver modern solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
