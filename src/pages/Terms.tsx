import { FileText, Scale } from 'lucide-react';

interface TermsProps {
  onNavigate: (page: string) => void;
}

export default function Terms({ onNavigate }: TermsProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Scale className="w-16 h-16 text-[#8eff7a] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
                These Terms of Service ("Terms") govern your access to and use of the services provided by Malcam Technologies (Pty) Ltd ("Malcam," "we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Services</h2>
            <p className="text-gray-700 mb-4">
              Malcam provides IT infrastructure services, including but not limited to:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Network infrastructure design, implementation, and support</li>
              <li>Application delivery controllers (F5, NSX ALB) deployment and management</li>
              <li>Network security solutions (Fortinet, Sophos, Cisco)</li>
              <li>Monitoring and observability platforms</li>
              <li>Custom software development (web applications, mobile apps, APIs)</li>
              <li>WhatsApp Business solutions via Broadcastly platform</li>
              <li>Cloud infrastructure and Linux solutions (Red Hat, SUSE)</li>
              <li>Professional services, consulting, and technical support</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Eligibility</h2>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old and have the authority to enter into these Terms on behalf of your organization. By using our services, you represent and warrant that you meet these eligibility requirements.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Account Registration</h2>
            <p className="text-gray-700 mb-4">
              To access certain services, you may need to create an account. You agree to:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Service Agreements</h2>
            <p className="text-gray-700 mb-4">
              Specific services may be governed by additional agreements, including:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>Statement of Work (SOW):</strong> Defines project scope, deliverables, and timelines</li>
              <li><strong>Service Level Agreements (SLAs):</strong> Specifies support tiers, response times, and uptime guarantees</li>
              <li><strong>Master Services Agreement (MSA):</strong> Establishes the commercial framework for ongoing services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              In the event of conflict between these Terms and a specific agreement, the specific agreement prevails.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Payment Terms</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">5.1 Fees</h3>
            <p className="text-gray-700 mb-4">
              You agree to pay all fees as specified in your service agreement. Fees may include:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>One-time project fees</li>
              <li>Recurring monthly or annual subscription fees</li>
              <li>Hourly professional services rates</li>
              <li>Hardware, software, and licensing costs</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">5.2 Invoicing and Payment</h3>
            <ul className="text-gray-700 mb-4">
              <li>Invoices are issued according to agreed payment schedules</li>
              <li>Payment is due within 30 days of invoice date unless otherwise specified</li>
              <li>Late payments may incur interest at the rate of prime + 2% per annum</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">5.3 Taxes</h3>
            <p className="text-gray-700 mb-4">
              All fees are exclusive of VAT and other applicable taxes, which you are responsible for paying.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Use our services for any unlawful or fraudulent purpose</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Transmit malware, viruses, or other malicious code</li>
              <li>Engage in activities that violate third-party rights</li>
              <li>Use our services to send unsolicited communications (spam)</li>
              <li>Reverse engineer, decompile, or attempt to extract source code</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Intellectual Property</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">7.1 Our IP</h3>
            <p className="text-gray-700 mb-4">
              All intellectual property rights in our services, including software, documentation, trademarks, and content, remain our property or that of our licensors. We grant you a limited, non-exclusive, non-transferable license to use our services as intended.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">7.2 Your IP</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of your data and content. By using our services, you grant us a license to host, store, and process your data solely to provide services to you.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">7.3 Custom Development</h3>
            <p className="text-gray-700 mb-4">
              For custom software development projects, intellectual property ownership will be defined in the applicable Statement of Work. Typically:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Client-specific custom code is transferred to the client upon full payment</li>
              <li>Malcam retains ownership of reusable frameworks, libraries, and tools</li>
              <li>Open-source components remain subject to their respective licenses</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Data Protection and Privacy</h2>
            <p className="text-gray-700 mb-4">
              We process personal information in accordance with our <button onClick={() => onNavigate('privacy')} className="text-[#8eff7a] font-semibold underline">Privacy Policy</button> and South Africa's Protection of Personal Information Act (POPIA). You are responsible for ensuring you have lawful basis to share any personal data with us.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Confidentiality</h2>
            <p className="text-gray-700 mb-4">
              Both parties agree to:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Protect confidential information disclosed during the engagement</li>
              <li>Use confidential information only for the intended purpose</li>
              <li>Not disclose confidential information to third parties without consent</li>
              <li>Return or destroy confidential information upon request</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Confidential information does not include information that is publicly available, independently developed, or lawfully obtained from third parties.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">10.1 Our Warranties</h3>
            <p className="text-gray-700 mb-4">
              We warrant that:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Services will be performed in a professional and workmanlike manner</li>
              <li>We have the right to provide the services</li>
              <li>Our personnel have appropriate qualifications and certifications</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">10.2 Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
              <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
              <li>We are not liable for data loss if you fail to maintain backups</li>
              <li>We are not liable for third-party services or products</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded by law.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold Malcam harmless from any claims, damages, or expenses arising from:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Your violation of these Terms</li>
              <li>Your misuse of our services</li>
              <li>Your violation of third-party rights</li>
              <li>Your failure to comply with applicable laws</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">13. Term and Termination</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">13.1 Term</h3>
            <p className="text-gray-700 mb-4">
              These Terms remain in effect until terminated by either party.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">13.2 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate by providing 30 days' written notice. You remain responsible for fees incurred prior to termination.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">13.3 Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate services if:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>You breach these Terms</li>
              <li>Payment is overdue by more than 30 days</li>
              <li>Your use poses security or legal risks</li>
              <li>We are required by law to terminate</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">13.4 Effect of Termination</h3>
            <p className="text-gray-700 mb-4">
              Upon termination:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Your access to services will cease</li>
              <li>Outstanding fees become immediately due</li>
              <li>We will provide data export for a reasonable period (typically 30 days)</li>
              <li>We may delete your data after the retention period</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">14. Force Majeure</h2>
            <p className="text-gray-700 mb-4">
              Neither party is liable for failure to perform due to circumstances beyond reasonable control, including natural disasters, pandemics, war, terrorism, labor disputes, or internet/telecommunications failures.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. We will notify you of material changes by:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Posting updated Terms on our website</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending email notification (for significant changes)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Continued use of services after changes constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">16. Governing Law and Dispute Resolution</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">16.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the Republic of South Africa.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">16.2 Dispute Resolution</h3>
            <p className="text-gray-700 mb-4">
              In the event of a dispute:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Parties will first attempt to resolve through good faith negotiation</li>
              <li>If unresolved within 30 days, disputes may be referred to mediation</li>
              <li>If mediation fails, disputes will be subject to the exclusive jurisdiction of the South African courts</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">17. General Provisions</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">17.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms, together with any referenced policies and service-specific agreements, constitute the entire agreement between the parties.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">17.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision is found unenforceable, the remaining provisions remain in full effect.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">17.3 Waiver</h3>
            <p className="text-gray-700 mb-4">
              Failure to enforce any right or provision does not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">17.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign these Terms without our prior written consent. We may assign our rights and obligations without restriction.
            </p>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">17.5 Notices</h3>
            <p className="text-gray-700 mb-4">
              Notices must be sent to the contact information provided in your service agreement or to legal@malcam.co.za.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">18. Contact Information</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-1"><strong>Malcam Technologies (Pty) Ltd</strong></p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> legal@malcam.co.za</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> +27 11 123 4567</p>
              <p className="text-gray-700 mb-1"><strong>General Inquiries:</strong> <button onClick={() => onNavigate('contact')} className="text-[#8eff7a] font-semibold underline">Contact Form</button></p>
              <p className="text-gray-700"><strong>Address:</strong> [Physical Address], Johannesburg, South Africa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
