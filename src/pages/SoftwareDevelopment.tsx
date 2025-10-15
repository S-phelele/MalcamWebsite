import { Code, Layers, Zap, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface SoftwareDevelopmentProps {
  onNavigate: (page: string) => void;
}

export default function SoftwareDevelopment({ onNavigate }: SoftwareDevelopmentProps) {
  const capabilities = [
    {
      icon: Code,
      title: 'Web & Mobile Applications',
      description: 'Modern web apps built with Next.js, React, and Node.js. Native and cross-platform mobile applications.',
    },
    {
      icon: Layers,
      title: 'Systems Integration',
      description: 'Connect your ERP, CRM, identity systems, and payment gateways. RESTful and GraphQL API development.',
    },
    {
      icon: Zap,
      title: 'Data & Automation',
      description: 'Event-driven architectures, message queues, data pipelines, and custom observability dashboards.',
    },
    {
      icon: Shield,
      title: 'Cloud & DevOps',
      description: 'Docker, Kubernetes, CI/CD pipelines, security hardening, and infrastructure as code.',
    },
  ];

  const techStack = [
    { category: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', tech: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { category: 'DevOps', tech: ['Docker', 'Kubernetes', 'AWS', 'Azure'] },
    { category: 'Integration', tech: ['REST APIs', 'GraphQL', 'Webhooks', 'Message Queues'] },
  ];

  const engagementModels = [
    {
      title: 'Fixed-Scope Projects',
      description: 'Well-defined requirements with fixed timeline and budget.',
      ideal: 'Ideal for specific features or MVPs',
    },
    {
      title: 'Monthly Retainer',
      description: 'Ongoing development support with dedicated capacity.',
      ideal: 'Ideal for continuous improvement',
    },
    {
      title: 'Staff Augmentation',
      description: 'Extend your team with our senior engineers.',
      ideal: 'Ideal for scaling development',
    },
  ];

  const process = [
    { step: '1', title: 'Discovery', description: 'Requirements gathering and technical assessment' },
    { step: '2', title: 'Architecture', description: 'System design and technology selection' },
    { step: '3', title: 'Agile Sprints', description: 'Iterative development with regular demos' },
    { step: '4', title: 'QA & Security', description: 'Testing, code reviews, and security audit' },
    { step: '5', title: 'Delivery', description: 'Deployment, documentation, and training' },
    { step: '6', title: 'Support', description: 'Ongoing maintenance and enhancement' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We build <span className="text-[#8eff7a]">reliable software</span>—designed for your networked world
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Custom applications, APIs, and integrations built by engineers who understand both software and infrastructure.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105"
            >
              Request a Scoping Call
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What We Build
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From web applications to complex system integrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Technology Stack
            </h2>
            <p className="text-gray-600 text-lg">
              Modern, proven technologies with on-prem and cloud options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-black mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.tech.map((tech, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#8eff7a] mr-2 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 text-lg">
              Structured process from discovery to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full">
                  <div className="w-12 h-12 bg-black text-[#8eff7a] rounded-lg flex items-center justify-center mb-4 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Engagement Models
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible approaches to fit your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-lg transition-all">
                <Users className="w-12 h-12 text-[#8eff7a] mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{model.description}</p>
                <p className="text-sm text-gray-500 italic">{model.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Security & Compliance
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We follow secure development lifecycle practices including code reviews, secrets management, security scanning, and POPIA compliance awareness. Our DevOps experience ensures secure deployment pipelines and infrastructure hardening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h3 className="text-lg font-bold mb-2">Secure SDLC</h3>
                <p className="text-gray-400 text-sm">Code reviews, security scanning, and vulnerability management</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h3 className="text-lg font-bold mb-2">Compliance Ready</h3>
                <p className="text-gray-400 text-sm">POPIA awareness and data protection best practices</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h3 className="text-lg font-bold mb-2">Infrastructure Security</h3>
                <p className="text-gray-400 text-sm">Hardened deployments leveraging our network security expertise</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-400 text-sm">Security patches, updates, and monitoring</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105 inline-flex items-center"
              >
                Request a Scoping Call <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
