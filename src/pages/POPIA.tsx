import { Shield, CheckCircle, FileText, Lock } from 'lucide-react';

interface POPIAProps {
  onNavigate: (page: string) => void;
}

export default function POPIA({ onNavigate }: POPIAProps) {
  const principles = [
    {
      title: 'Accountability',
      description: 'We are responsible for complying with POPIA and demonstrating compliance.'
    },
    {
      title: 'Processing Limitation',
      description: 'We process personal information lawfully, with consent or another legal basis.'
    },
    {
      title: 'Purpose Specification',
      description: 'We collect information for specific, explicitly defined, and lawful purposes.'
    },
    {
      title: 'Further Processing Limitation',
      description: 'We only use information for purposes compatible with the original collection.'
    },
    {
      title: 'Information Quality',
      description: 'We ensure personal information is complete, accurate, and up-to-date.'
    },
    {
      title: 'Openness',
      description: 'We are transparent about our data processing practices.'
    },
    {
      title: 'Security Safeguards',
      description: 'We implement appropriate technical and organizational security measures.'
    },
    {
      title: 'Data Subject Participation',
      description: 'We respect your rights to access, correct, and delete your information.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-[#8eff7a] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              POPIA Compliance Statement
            </h1>
            <p className="text-lg text-gray-300">
              Our commitment to protecting your personal information
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#8eff7a] bg-opacity-10 border-l-4 border-[#8eff7a] rounded-lg p-6 mb-12">
              <p className="text-gray-700 text-lg mb-0">
                Malcam Technologies (Pty) Ltd is committed to full compliance with the Protection of Personal Information Act 4 of 2013 (POPIA). This statement outlines our adherence to POPIA's requirements and our commitment to protecting your personal information.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">What is POPIA?</h2>
            <p className="text-gray-700 mb-6">
              The Protection of Personal Information Act (POPIA) is South African legislation that regulates how organizations collect, process, store, and share personal information. It aims to protect individuals' privacy rights while enabling organizations to use data responsibly.
            </p>
            <p className="text-gray-700 mb-8">
              POPIA became fully enforceable on July 1, 2021, and applies to all organizations that process personal information of South African residents.
            </p>

            <h2 className="text-3xl font-bold text-black mb-6">Our Commitment to POPIA Principles</h2>
            <p className="text-gray-700 mb-6">
              POPIA establishes eight principles for lawful processing of personal information. Here's how Malcam adheres to each principle:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#8eff7a] transition-all">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="w-6 h-6 text-[#8eff7a] mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-black">{principle.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">How We Process Personal Information</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">Collection</h3>
                <p className="text-gray-700 mb-3">
                  We collect personal information directly from you through:
                </p>
                <ul className="text-gray-700 space-y-1 ml-5">
                  <li>• Website contact forms and inquiries</li>
                  <li>• Service agreements and contracts</li>
                  <li>• WhatsApp Business communications (with consent)</li>
                  <li>• Email correspondence and support tickets</li>
                  <li>• Project delivery and technical interactions</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  We only collect information that is necessary for our business purposes and with your knowledge.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">Use</h3>
                <p className="text-gray-700 mb-3">
                  We use your personal information for:
                </p>
                <ul className="text-gray-700 space-y-1 ml-5">
                  <li>• Providing IT infrastructure and software development services</li>
                  <li>• Customer support and technical assistance</li>
                  <li>• Billing and account management</li>
                  <li>• Service improvements and quality assurance</li>
                  <li>• Marketing communications (with your consent)</li>
                  <li>• Legal and regulatory compliance</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">Storage</h3>
                <p className="text-gray-700">
                  Personal information is stored securely using:
                </p>
                <ul className="text-gray-700 space-y-1 ml-5 mt-3">
                  <li>• Encrypted databases (Supabase with encryption at rest)</li>
                  <li>• Secure cloud infrastructure with access controls</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Data backups with retention policies</li>
                  <li>• Multi-factor authentication for system access</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Data is stored in South Africa or jurisdictions with adequate data protection laws, in compliance with POPIA cross-border transfer requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">Sharing</h3>
                <p className="text-gray-700 mb-3">
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="text-gray-700 space-y-1 ml-5">
                  <li>• Technology vendors (F5, Fortinet, Microsoft, etc.) when implementing solutions</li>
                  <li>• Service providers (hosting, payment processing) under strict data processing agreements</li>
                  <li>• Legal authorities when required by law</li>
                  <li>• Your designated representatives or authorized parties</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  All third-party processors are required to maintain POPIA-compliant data protection practices.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Your Rights Under POPIA</h2>
            <p className="text-gray-700 mb-6">
              As a data subject, you have the following rights:
            </p>

            <div className="bg-white border-2 border-[#8eff7a] rounded-xl p-8 mb-12">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-black mb-2">1. Right to Access</h4>
                  <p className="text-gray-700 text-sm">Request a copy of the personal information we hold about you, free of charge (first request).</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">2. Right to Correction</h4>
                  <p className="text-gray-700 text-sm">Request correction of inaccurate, misleading, or outdated information.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">3. Right to Deletion</h4>
                  <p className="text-gray-700 text-sm">Request deletion of your personal information (subject to legal retention requirements).</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">4. Right to Object</h4>
                  <p className="text-gray-700 text-sm">Object to processing of your information for direct marketing or other purposes.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">5. Right to Restriction</h4>
                  <p className="text-gray-700 text-sm">Request that we stop or limit processing while investigating a concern.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">6. Right to Data Portability</h4>
                  <p className="text-gray-700 text-sm">Receive your personal information in a structured, commonly used, machine-readable format.</p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">7. Right to Lodge a Complaint</h4>
                  <p className="text-gray-700 text-sm">File a complaint with the Information Regulator if you believe your rights have been violated.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Exercising Your Rights</h2>
            <p className="text-gray-700 mb-6">
              To exercise any of your POPIA rights, please submit a request to our Information Officer:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-black mb-4">Information Officer Contact Details</h4>
              <p className="text-gray-700 mb-1"><strong>Name:</strong> [Information Officer Name]</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> privacy@malcam.co.za</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> +27 11 123 4567</p>
              <p className="text-gray-700 mb-4"><strong>Address:</strong> Malcam Technologies (Pty) Ltd, [Physical Address], Johannesburg, South Africa</p>
              <p className="text-gray-700 text-sm">
                We will respond to your request within 30 days and may request verification of your identity to protect your information.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Security Measures</h2>
            <p className="text-gray-700 mb-6">
              We implement comprehensive security measures to protect personal information:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <Lock className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h4 className="font-bold text-black mb-2">Technical Safeguards</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Encryption (TLS 1.3 for transmission, AES-256 at rest)</li>
                  <li>• Firewalls and intrusion detection systems</li>
                  <li>• Regular security patching and updates</li>
                  <li>• Secure development practices (OWASP guidelines)</li>
                  <li>• Penetration testing and vulnerability scans</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <Shield className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h4 className="font-bold text-black mb-2">Organizational Safeguards</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Access controls and role-based permissions</li>
                  <li>• Employee training on data protection</li>
                  <li>• Confidentiality agreements with staff and contractors</li>
                  <li>• Data breach response plan</li>
                  <li>• Regular compliance audits</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Data Breach Notification</h2>
            <p className="text-gray-700 mb-6">
              In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
            </p>
            <ul className="text-gray-700 mb-8 space-y-2">
              <li>• Notify the Information Regulator as soon as reasonably possible</li>
              <li>• Notify affected individuals without undue delay</li>
              <li>• Provide details of the breach, its likely consequences, and remedial actions</li>
              <li>• Take immediate steps to mitigate harm and prevent future breaches</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-6">Complaints to the Information Regulator</h2>
            <p className="text-gray-700 mb-4">
              If you believe we have not handled your personal information in accordance with POPIA, you have the right to lodge a complaint with the Information Regulator:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-12">
              <h4 className="font-bold text-black mb-3">Information Regulator of South Africa</h4>
              <p className="text-gray-700 text-sm mb-1"><strong>Website:</strong> <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">www.justice.gov.za/inforeg/</a></p>
              <p className="text-gray-700 text-sm mb-1"><strong>Email:</strong> inforeg@justice.gov.za</p>
              <p className="text-gray-700 text-sm mb-1"><strong>Phone:</strong> +27 (0)10 023 5200</p>
              <p className="text-gray-700 text-sm"><strong>Address:</strong> JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</p>
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Related Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <button
                onClick={() => onNavigate('privacy')}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#8eff7a] hover:shadow-lg transition-all text-left"
              >
                <FileText className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h4 className="font-bold text-black mb-2">Privacy Policy</h4>
                <p className="text-gray-600 text-sm">Detailed information about our data practices</p>
              </button>

              <button
                onClick={() => onNavigate('cookies')}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#8eff7a] hover:shadow-lg transition-all text-left"
              >
                <FileText className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h4 className="font-bold text-black mb-2">Cookie Policy</h4>
                <p className="text-gray-600 text-sm">How we use cookies and tracking technologies</p>
              </button>

              <button
                onClick={() => onNavigate('terms')}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#8eff7a] hover:shadow-lg transition-all text-left"
              >
                <FileText className="w-8 h-8 text-[#8eff7a] mb-3" />
                <h4 className="font-bold text-black mb-2">Terms of Service</h4>
                <p className="text-gray-600 text-sm">Terms governing use of our services</p>
              </button>
            </div>

            <div className="bg-[#8eff7a] bg-opacity-10 border-l-4 border-[#8eff7a] rounded-lg p-6">
              <p className="text-gray-700 mb-0">
                <strong>Last Updated:</strong> October 9, 2025<br />
                This POPIA Compliance Statement is reviewed annually and updated as needed to reflect changes in our practices or legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
