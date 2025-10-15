import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (page: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-[#8eff7a] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300">
              Last updated: October 9, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-[#8eff7a] bg-opacity-10 border-l-4 border-[#8eff7a] rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-0">
                Malcam Technologies (Pty) Ltd ("Malcam," "we," "us," or "our") is committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Name and contact details (email address, phone number, physical address)</li>
              <li>Company name and job title</li>
              <li>Billing and payment information</li>
              <li>Technical information (IP address, browser type, device information)</li>
              <li>Communication preferences</li>
              <li>Information provided in forms, surveys, or feedback</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you access our website, we automatically collect certain information, including:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Log data (IP address, browser type, pages visited, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Device information (operating system, device identifiers)</li>
              <li>Usage data (how you interact with our services)</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our IT infrastructure, networking, and software development services</li>
              <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send service-related notifications</li>
              <li><strong>Marketing:</strong> With your consent, to send promotional materials, newsletters, and updates about our products and services</li>
              <li><strong>Analytics:</strong> To analyze website usage, improve user experience, and optimize our services</li>
              <li><strong>Security:</strong> To protect against fraudulent, unauthorized, or illegal activity</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Legal Basis for Processing (POPIA Compliance)</h2>
            <p className="text-gray-700 mb-4">
              Under the Protection of Personal Information Act (POPIA), we process your personal information based on:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>Consent:</strong> You have given explicit consent for specific processing purposes</li>
              <li><strong>Contractual Necessity:</strong> Processing is necessary to fulfill our contractual obligations</li>
              <li><strong>Legitimate Interests:</strong> We have legitimate business interests that do not override your privacy rights</li>
              <li><strong>Legal Obligation:</strong> We must process data to comply with legal requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting, payment processing, analytics)</li>
              <li><strong>Technology Partners:</strong> With your consent, when integrating solutions from vendors like F5, Fortinet, Microsoft, etc.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights</li>
              <li><strong>With Your Consent:</strong> Any other disclosure made with your explicit permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection</li>
              <li>Secure data centers with physical access controls</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary depending on:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>The nature of the information</li>
              <li>Legal and regulatory requirements</li>
              <li>Legitimate business purposes</li>
              <li>Your consent withdrawal (where applicable)</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Your Rights Under POPIA</h2>
            <p className="text-gray-700 mb-4">
              Under South Africa's Protection of Personal Information Act, you have the following rights:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (right to be forgotten)</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Data Portability:</strong> Receive your personal information in a structured, machine-readable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@malcam.co.za" className="text-[#8eff7a] font-semibold">privacy@malcam.co.za</a>. We will respond to your request within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our <button onClick={() => onNavigate('cookies')} className="text-[#8eff7a] font-semibold underline">Cookie Policy</button>.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. WhatsApp Business Communications</h2>
            <p className="text-gray-700 mb-4">
              If you opt-in to receive communications via WhatsApp through our Broadcastly platform:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>We will only send messages to users who have explicitly consented</li>
              <li>You can opt-out at any time by replying "STOP"</li>
              <li>We comply with WhatsApp Business Policy and POPIA requirements</li>
              <li>Your phone number and message history are stored securely</li>
              <li>We do not share your WhatsApp information with third parties without consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites (e.g., vendor partner sites). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">12. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries outside South Africa. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with POPIA requirements.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending email notification (for material changes)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">14. Information Officer</h2>
            <p className="text-gray-700 mb-4">
              For POPIA compliance, our designated Information Officer is responsible for ensuring compliance with data protection laws:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
              <p className="text-gray-700 mb-1"><strong>Information Officer:</strong> [Name]</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> privacy@malcam.co.za</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> +27 11 123 4567</p>
              <p className="text-gray-700"><strong>Address:</strong> [Physical Address], Johannesburg, South Africa</p>
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">15. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-1"><strong>Email:</strong> privacy@malcam.co.za</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> +27 11 123 4567</p>
              <p className="text-gray-700 mb-1"><strong>Website:</strong> <button onClick={() => onNavigate('contact')} className="text-[#8eff7a] font-semibold underline">Contact Form</button></p>
              <p className="text-gray-700"><strong>Postal Address:</strong> Malcam Technologies (Pty) Ltd, [Address], Johannesburg, South Africa</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-black mb-2">Complaints to Information Regulator</h4>
                  <p className="text-gray-700 text-sm">
                    If you are not satisfied with how we have handled your personal information, you have the right to lodge a complaint with the Information Regulator of South Africa:
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Website:</strong> <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">www.justice.gov.za/inforeg/</a><br />
                    <strong>Email:</strong> inforeg@justice.gov.za
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
