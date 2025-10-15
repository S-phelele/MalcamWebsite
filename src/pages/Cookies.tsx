import { Cookie, Settings, BarChart, Shield } from 'lucide-react';

interface CookiesProps {
  onNavigate: (page: string) => void;
}

export default function Cookies({ onNavigate }: CookiesProps) {
  const cookieTypes = [
    {
      icon: Shield,
      name: 'Strictly Necessary Cookies',
      description: 'Essential for website functionality. Cannot be disabled.',
      examples: [
        'Session management cookies',
        'Authentication tokens',
        'Security cookies',
        'Load balancing cookies'
      ],
      duration: 'Session or up to 24 hours',
      canDisable: false
    },
    {
      icon: Settings,
      name: 'Functional Cookies',
      description: 'Remember your preferences and settings.',
      examples: [
        'Language preferences',
        'Region settings',
        'Theme preferences (dark/light mode)',
        'Form data retention'
      ],
      duration: 'Up to 12 months',
      canDisable: true
    },
    {
      icon: BarChart,
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website.',
      examples: [
        'Google Analytics (_ga, _gid)',
        'Page visit tracking',
        'Traffic source analysis',
        'User journey mapping'
      ],
      duration: 'Up to 24 months',
      canDisable: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Cookie className="w-16 h-16 text-[#8eff7a] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookie Policy
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
                This Cookie Policy explains how Malcam Technologies (Pty) Ltd ("Malcam," "we," "us," or "our") uses cookies and similar tracking technologies when you visit our website. This policy helps you understand what cookies are, how we use them, and your choices regarding cookies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files placed on your device (computer, smartphone, tablet) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 mb-4">
              Cookies can be:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>First-party cookies:</strong> Set by the website you're visiting (in this case, malcam.co.za)</li>
              <li><strong>Third-party cookies:</strong> Set by external services we use (e.g., Google Analytics)</li>
              <li><strong>Session cookies:</strong> Temporary cookies deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until manually deleted</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies for the following purposes:
            </p>

            <div className="space-y-8 my-8">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">{type.name}</h3>
                        <p className="text-gray-600 mb-3">{type.description}</p>
                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                          <p className="text-sm font-semibold text-black mb-2">Examples:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {type.examples.map((example, idx) => (
                              <li key={idx}>• {example}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="text-gray-600">
                            <strong>Duration:</strong> {type.duration}
                          </span>
                          <span className={type.canDisable ? 'text-[#8eff7a] font-semibold' : 'text-gray-500'}>
                            {type.canDisable ? '✓ Can be disabled' : '✗ Cannot be disabled'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Specific Cookies We Use</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden text-sm">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="p-3 text-left">Cookie Name</th>
                    <th className="p-3 text-left">Purpose</th>
                    <th className="p-3 text-left">Type</th>
                    <th className="p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-mono text-xs">session_id</td>
                    <td className="p-3">Maintains your session state</td>
                    <td className="p-3">Necessary</td>
                    <td className="p-3">Session</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="p-3 font-mono text-xs">csrf_token</td>
                    <td className="p-3">Security - prevents cross-site request forgery</td>
                    <td className="p-3">Necessary</td>
                    <td className="p-3">Session</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-mono text-xs">cookie_consent</td>
                    <td className="p-3">Remembers your cookie preferences</td>
                    <td className="p-3">Necessary</td>
                    <td className="p-3">12 months</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="p-3 font-mono text-xs">_ga</td>
                    <td className="p-3">Google Analytics - distinguishes users</td>
                    <td className="p-3">Analytics</td>
                    <td className="p-3">24 months</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-mono text-xs">_gid</td>
                    <td className="p-3">Google Analytics - distinguishes users</td>
                    <td className="p-3">Analytics</td>
                    <td className="p-3">24 hours</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="p-3 font-mono text-xs">_gat</td>
                    <td className="p-3">Google Analytics - throttles request rate</td>
                    <td className="p-3">Analytics</td>
                    <td className="p-3">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use third-party services that may set cookies on your device:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>Google Analytics:</strong> Helps us understand website usage and improve user experience. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Google Privacy Policy</a></li>
              <li><strong>Supabase:</strong> Our backend infrastructure provider for authentication and data storage. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Supabase Privacy Policy</a></li>
            </ul>
            <p className="text-gray-700 mb-4">
              These third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies to understand how they use cookies.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Your Cookie Choices</h2>
            <h3 className="text-xl font-bold text-black mt-6 mb-3">5.1 Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies after each browsing session</li>
              <li>View and delete individual cookies</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Instructions for popular browsers:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Safari (macOS)</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">5.2 Opt-Out of Analytics</h3>
            <p className="text-gray-700 mb-4">
              To opt-out of Google Analytics tracking:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li>Enable "Do Not Track" in your browser settings</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-6 mb-3">5.3 Impact of Blocking Cookies</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-0">
                <strong>Note:</strong> Blocking or deleting cookies may impact website functionality. Some features may not work properly, and you may need to re-enter information or preferences on subsequent visits.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Mobile Devices</h2>
            <p className="text-gray-700 mb-4">
              Mobile devices use different identifiers. To limit tracking on mobile:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><strong>iOS:</strong> Settings → Privacy → Tracking → Disable "Allow Apps to Request to Track"</li>
              <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. POPIA Compliance</h2>
            <p className="text-gray-700 mb-4">
              Under South Africa's Protection of Personal Information Act (POPIA), we are required to:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Inform you about cookies and how we use them</li>
              <li>Obtain consent for non-essential cookies</li>
              <li>Allow you to withdraw consent at any time</li>
              <li>Provide clear information about data processing</li>
            </ul>
            <p className="text-gray-700 mb-4">
              When you first visit our website, you'll see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customize your preferences.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. We will notify you of significant changes by:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Updating the "Last updated" date</li>
              <li>Displaying a notice on our website</li>
              <li>Requesting renewed consent where required</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. More Information</h2>
            <p className="text-gray-700 mb-4">
              For more information about how we handle your personal data, please see our <button onClick={() => onNavigate('privacy')} className="text-[#8eff7a] font-semibold underline">Privacy Policy</button>.
            </p>
            <p className="text-gray-700 mb-4">
              To learn more about cookies in general:
            </p>
            <ul className="text-gray-700 mb-4">
              <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">All About Cookies</a></li>
              <li><a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#8eff7a] underline">AboutCookies.org</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-1"><strong>Email:</strong> privacy@malcam.co.za</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> +27 11 123 4567</p>
              <p className="text-gray-700"><strong>Contact Form:</strong> <button onClick={() => onNavigate('contact')} className="text-[#8eff7a] font-semibold underline">Contact Us</button></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
