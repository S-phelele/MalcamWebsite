import { Shield, Clock, Phone, Mail, MessageCircle, Headphones, AlertCircle, CheckCircle } from 'lucide-react';

interface SupportProps {
  onNavigate: (page: string) => void;
}

export default function Support({ onNavigate }: SupportProps) {
  const supportTiers = [
    {
      name: 'Bronze',
      color: 'from-amber-700 to-amber-900',
      price: 'From R15,000/month',
      description: 'Essential support for small teams',
      features: [
        { text: 'Business hours support (8AM-5PM, Mon-Fri)', included: true },
        { text: 'Email and phone support', included: true },
        { text: 'Response time: 4 hours', included: true },
        { text: 'Restore time: 8 business hours', included: true },
        { text: 'Quarterly health checks', included: true },
        { text: 'Knowledge base access', included: true },
        { text: '24/7 emergency support', included: false },
        { text: 'Dedicated account manager', included: false },
        { text: 'Proactive monitoring', included: false }
      ],
      ideal: 'SMBs with standard infrastructure'
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      price: 'From R35,000/month',
      description: 'Enhanced support for growing enterprises',
      features: [
        { text: 'Extended hours support (7AM-9PM, Mon-Sat)', included: true },
        { text: 'Email, phone, and WhatsApp support', included: true },
        { text: 'Response time: 2 hours', included: true },
        { text: 'Restore time: 4 business hours', included: true },
        { text: 'Monthly health checks', included: true },
        { text: 'Priority ticket handling', included: true },
        { text: '24/7 emergency hotline (P1 only)', included: true },
        { text: 'Quarterly business reviews', included: true },
        { text: 'Dedicated account manager', included: false }
      ],
      ideal: 'Mid-size enterprises with critical systems'
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      price: 'Custom pricing',
      description: 'Premium 24/7 support for mission-critical environments',
      features: [
        { text: '24/7/365 support coverage', included: true },
        { text: 'All channels: Email, phone, WhatsApp, Teams', included: true },
        { text: 'Response time: 15 minutes', included: true },
        { text: 'Restore time: 2 hours', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Dedicated technical lead', included: true },
        { text: 'Proactive monitoring and alerting', included: true },
        { text: 'Monthly business reviews', included: true },
        { text: 'Priority vendor escalation', included: true },
        { text: 'On-site support (when required)', included: true },
        { text: 'Infrastructure roadmap planning', included: true }
      ],
      ideal: 'Enterprises with zero-downtime requirements',
      featured: true
    }
  ];

  const priorityLevels = [
    {
      level: 'P1 - Critical',
      description: 'Complete service outage, business-critical system down',
      bronze: { response: '4 hours', restore: '8 hours' },
      silver: { response: '2 hours', restore: '4 hours' },
      gold: { response: '15 min', restore: '2 hours' }
    },
    {
      level: 'P2 - High',
      description: 'Major functionality impaired, significant business impact',
      bronze: { response: '8 hours', restore: '16 hours' },
      silver: { response: '4 hours', restore: '8 hours' },
      gold: { response: '30 min', restore: '4 hours' }
    },
    {
      level: 'P3 - Medium',
      description: 'Minor functionality issue, workaround available',
      bronze: { response: '24 hours', restore: '5 days' },
      silver: { response: '12 hours', restore: '3 days' },
      gold: { response: '2 hours', restore: '24 hours' }
    },
    {
      level: 'P4 - Low',
      description: 'General inquiry, feature request, documentation',
      bronze: { response: '48 hours', restore: 'Best effort' },
      silver: { response: '24 hours', restore: 'Best effort' },
      gold: { response: '4 hours', restore: 'Planned' }
    }
  ];

  const contactChannels = [
    {
      icon: Phone,
      name: 'Phone Support',
      value: '+27 11 123 4567',
      availability: 'Tier-dependent hours',
      description: 'Immediate assistance for urgent issues'
    },
    {
      icon: Mail,
      name: 'Email Support',
      value: 'support@malcam.co.za',
      availability: '24/7 ticket submission',
      description: 'Detailed issue reporting and tracking'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp Support',
      value: '+27 82 987 6543',
      availability: 'Silver & Gold tiers',
      description: 'Quick queries and status updates'
    },
    {
      icon: Headphones,
      name: 'Emergency Hotline',
      value: '+27 82 000 0000',
      availability: 'Gold tier 24/7',
      description: 'Critical P1 incidents only'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support & <span className="text-[#8eff7a]">SLAs</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Enterprise-grade support with guaranteed response and resolution times
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Support Tiers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the level of support that matches your business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-2xl overflow-hidden hover:shadow-2xl transition-all ${
                  tier.featured ? 'border-[#8eff7a] lg:scale-105' : 'border-gray-200'
                }`}
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white p-6 text-center`}>
                  {tier.featured && (
                    <div className="inline-block bg-[#8eff7a] text-black px-3 py-1 rounded-full text-xs font-bold mb-2">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold">{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-[#8eff7a] mr-2 flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-black mb-1">Ideal for:</p>
                    <p className="text-sm text-gray-600">{tier.ideal}</p>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      tier.featured
                        ? 'bg-[#8eff7a] text-black hover:bg-green-400'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Response & Resolution SLAs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Guaranteed response and restore times based on incident severity
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left">Priority Level</th>
                  <th className="p-4 text-center">Bronze</th>
                  <th className="p-4 text-center">Silver</th>
                  <th className="p-4 text-center bg-[#8eff7a] text-black">Gold</th>
                </tr>
              </thead>
              <tbody>
                {priorityLevels.map((priority, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="p-4">
                      <div className="font-bold text-black mb-1">{priority.level}</div>
                      <div className="text-sm text-gray-600">{priority.description}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-sm">
                        <div className="font-semibold text-black">Response: {priority.bronze.response}</div>
                        <div className="text-gray-600">Restore: {priority.bronze.restore}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-sm">
                        <div className="font-semibold text-black">Response: {priority.silver.response}</div>
                        <div className="text-gray-600">Restore: {priority.silver.restore}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center bg-green-50">
                      <div className="text-sm">
                        <div className="font-semibold text-black">Response: {priority.gold.response}</div>
                        <div className="text-gray-600">Restore: {priority.gold.restore}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-white border-l-4 border-[#8eff7a] rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-[#8eff7a] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-black mb-2">SLA Definitions</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Response Time:</strong> Time from ticket submission to initial contact by support engineer</li>
                  <li><strong>Restore Time:</strong> Maximum time to restore service or provide a viable workaround</li>
                  <li><strong>Business Hours:</strong> Monday to Friday, 8:00 AM to 5:00 PM SAST (excluding public holidays)</li>
                  <li><strong>Emergency Hotline:</strong> For Gold tier P1 incidents only; misuse may result in charges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Contact Channels
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Multiple ways to reach our support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#8eff7a] hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{channel.name}</h3>
                  <p className="text-[#8eff7a] font-semibold mb-2">{channel.value}</p>
                  <p className="text-xs text-gray-500 mb-2">{channel.availability}</p>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
              Escalation Process
            </h2>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8eff7a] text-black rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Submit Ticket</h4>
                    <p className="text-gray-600">Email, phone, or portal. Ticket auto-assigned to L1 support.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8eff7a] text-black rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">L1 Triage</h4>
                    <p className="text-gray-600">Initial diagnostics, issue classification, and troubleshooting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8eff7a] text-black rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">L2 Escalation</h4>
                    <p className="text-gray-600">Complex issues escalated to senior engineers and specialists.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8eff7a] text-black rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Vendor Engagement</h4>
                    <p className="text-gray-600">If needed, we engage vendor TAC (F5, Fortinet, Cisco, etc.) on your behalf.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8eff7a] text-black rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Management Escalation</h4>
                    <p className="text-gray-600">Gold tier: Account manager and technical lead involvement for critical issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready for Peace of Mind?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Choose a support tier that ensures your infrastructure stays reliable and performant
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
          >
            Discuss Support Needs
          </button>
        </div>
      </section>
    </div>
  );
}
