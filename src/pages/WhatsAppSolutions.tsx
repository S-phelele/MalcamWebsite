import { MessageCircle, Send, Users, BarChart3, Shield, CheckCircle, Bell, Zap } from 'lucide-react';

interface WhatsAppSolutionsProps {
  onNavigate: (page: string) => void;
}

export default function WhatsAppSolutions({ onNavigate }: WhatsAppSolutionsProps) {
  const features = [
    {
      icon: Send,
      title: 'Broadcast Module',
      description: 'Send mass marketing messages with personalization and rich media. Schedule campaigns and track message delivery in real-time.',
    },
    {
      icon: MessageCircle,
      title: 'Inbox Module',
      description: 'Shared team conversations with routing, response templates, and collaboration tracking. Manage customer interactions efficiently.',
    },
    {
      icon: Users,
      title: 'Menus Module',
      description: 'Create interactive WhatsApp menu flows with multi-level branded interactions using buttons and lists. Replace traditional USSD systems.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track sends, deliveries, read rates, and response capture. Cost estimates and campaign performance metrics.',
    },
    {
      icon: Bell,
      title: 'Real-Time Updates',
      description: 'Enable real-time customer updates and services. More affordable and engaging than SMS/USSD with interactive, branded communication.',
    },
    {
      icon: Zap,
      title: 'Integration Module',
      description: 'Connect with CRM, POS, and ERP systems via REST API and webhooks. Enable real-time data synchronization across platforms.',
    },
  ];

  const industries = [
    {
      industry: 'Hotels & Lodges',
      useCase: 'Booking confirmations, check-in reminders, guest services, and real-time customer updates',
    },
    {
      industry: 'Supermarkets & Retail',
      useCase: 'Promotional campaigns, order updates, customer loyalty programs, and delivery notifications',
    },
    {
      industry: 'Schools & Institutions',
      useCase: 'Parent communications, event notifications, attendance alerts, and administrative updates',
    },
    {
      industry: 'Clinics & Health Providers',
      useCase: 'Appointment reminders, test results, prescription alerts, and patient engagement',
    },
    {
      industry: 'Financial Services',
      useCase: 'Transaction alerts, account notifications, secure customer communication, and fraud alerts',
    },
    {
      industry: 'Logistics & Delivery',
      useCase: 'Package tracking, delivery notifications, driver coordination, and customer updates',
    },
  ];

  const compliance = [
    'POPIA compliant opt-in and opt-out management',
    'Template approval workflow integration',
    'Audit trails for all communications',
    'Data residency options (cloud or on-prem)',
    'Secure webhook integrations',
    'Rate limiting and abuse prevention',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/225982051.png)'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5 text-[#8eff7a] mr-2" />
              <span className="text-sm font-semibold text-[#8eff7a]">Powered by Broadcastly</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn <span className="text-[#8eff7a]">WhatsApp</span> into Your Business Channel
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed mb-8 drop-shadow-lg">
              Broadcastly is a comprehensive WhatsApp Business SaaS platform designed specifically for African businesses. Transform customer communication with broadcast messaging, interactive menus, team inbox, and powerful integrations—all backed by Malcam's enterprise infrastructure expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
              >
                Book a Demo
              </button>
              <a
                href="https://www.broadcastly.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all text-center shadow-lg"
              >
                Visit Broadcastly Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Four Powerful Modules
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Modular, scalable WhatsApp Business solution built for African market needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-[#8eff7a] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Compliance & Trust
              </h2>
              <p className="text-gray-600 text-lg">
                Built with security and data protection at the core
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#8eff7a] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Industry Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored for your sector's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#8eff7a] hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-black mb-3">{item.industry}</h3>
                <p className="text-gray-600 leading-relaxed">{item.useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Template Examples
              </h2>
              <p className="text-gray-400 text-lg">
                Pre-approved message formats for various use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-xs text-[#8eff7a] font-semibold mb-2">APPOINTMENT REMINDER</div>
                <div className="bg-gray-800 rounded-lg p-4 text-sm">
                  <p className="text-gray-300">
                    Hi <span className="text-[#8eff7a]">[Name]</span>, this is a reminder that your appointment is scheduled for <span className="text-[#8eff7a]">[Date]</span> at <span className="text-[#8eff7a]">[Time]</span>. Reply to confirm or reschedule.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-xs text-[#8eff7a] font-semibold mb-2">ORDER UPDATE</div>
                <div className="bg-gray-800 rounded-lg p-4 text-sm">
                  <p className="text-gray-300">
                    Your order <span className="text-[#8eff7a]">[OrderID]</span> has been shipped and will arrive by <span className="text-[#8eff7a]">[Date]</span>. Track: <span className="text-[#8eff7a]">[Link]</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-xs text-[#8eff7a] font-semibold mb-2">PROMOTIONAL CAMPAIGN</div>
                <div className="bg-gray-800 rounded-lg p-4 text-sm">
                  <p className="text-gray-300">
                    Hi <span className="text-[#8eff7a]">[Name]</span>, exclusive offer just for you! Get <span className="text-[#8eff7a]">[Discount]</span> off <span className="text-[#8eff7a]">[Product]</span>. Valid until <span className="text-[#8eff7a]">[Date]</span>. Shop now: <span className="text-[#8eff7a]">[Link]</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-xs text-[#8eff7a] font-semibold mb-2">SERVICE ALERT</div>
                <div className="bg-gray-800 rounded-lg p-4 text-sm">
                  <p className="text-gray-300">
                    Notice: <span className="text-[#8eff7a]">[Service]</span> will be undergoing maintenance on <span className="text-[#8eff7a]">[Date]</span> from <span className="text-[#8eff7a]">[Time]</span>. We apologize for any inconvenience.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Pricing</h3>
              <p className="text-gray-400 mb-6">
                Flexible plans tailored to your message volume and feature requirements. Contact our sales team for a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105"
                >
                  Book a Demo
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border-2 border-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#8eff7a] hover:text-[#8eff7a] transition-all"
                >
                  Request Template Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose Broadcastly by Malcam
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Combine WhatsApp Business capabilities with Malcam's proven network security, uptime expertise, and enterprise vendor ecosystem. Secure integrations, reliable delivery, and compliance built-in.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
