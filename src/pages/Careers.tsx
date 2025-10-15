import { Users, TrendingUp, Heart, Award, MapPin, Clock, Briefcase, Send } from 'lucide-react';
import { useState } from 'react';

interface CareersProps {
  onNavigate: (page: string) => void;
}

export default function Careers({ onNavigate }: CareersProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    coverLetter: '',
    resume: null as File | null
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning with vendor certifications (F5, Fortinet, Cisco) and professional development'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with industry experts on cutting-edge technologies and challenging projects'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and generous leave policies'
    },
    {
      icon: Award,
      title: 'Competitive Package',
      description: 'Market-related salaries, performance bonuses, and comprehensive benefits'
    }
  ];

  const openRoles = [
    {
      title: 'Senior Network Engineer',
      department: 'Infrastructure',
      location: 'Johannesburg / Hybrid',
      type: 'Full-time',
      description: 'Design and implement enterprise network solutions using Cisco, Juniper, and Arista technologies.',
      requirements: [
        '5+ years experience in enterprise networking',
        'CCNP or equivalent certification required',
        'Experience with F5 LTM/GTM modules',
        'Strong knowledge of routing protocols (BGP, OSPF)',
        'Security appliance experience (Fortinet, Sophos)'
      ]
    },
    {
      title: 'F5 Solutions Architect',
      department: 'Application Delivery',
      location: 'Johannesburg / Remote',
      type: 'Full-time',
      description: 'Lead F5 implementations including LTM, GTM, APM, ASM, and custom I-Rules development.',
      requirements: [
        '3+ years hands-on F5 experience',
        'F5 certification (CTS or higher) preferred',
        'Proficiency in I-Rules, TCL scripting',
        'Experience with F5 Big-IQ management',
        'Load balancing and application security expertise'
      ]
    },
    {
      title: 'Full-Stack Software Developer',
      department: 'Software Development',
      location: 'Cape Town / Hybrid',
      type: 'Full-time',
      description: 'Build modern web and mobile applications using React, Node.js, and cloud-native technologies.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, TypeScript, Node.js',
        'Experience with RESTful APIs and microservices',
        'Database design (PostgreSQL, MongoDB)',
        'Cloud platform experience (AWS, Azure, GCP)'
      ]
    },
    {
      title: 'Solutions Engineer',
      department: 'Sales & Presales',
      location: 'Johannesburg',
      type: 'Full-time',
      description: 'Bridge technical expertise and business needs, supporting sales with solution design and demonstrations.',
      requirements: [
        '3+ years in technical sales or solutions engineering',
        'Strong presentation and communication skills',
        'Networking and security knowledge',
        'Experience with F5, Fortinet, or similar vendors',
        'Ability to translate business requirements into technical solutions'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and maintain CI/CD pipelines, infrastructure as code, and cloud automation.',
      requirements: [
        '3+ years DevOps experience',
        'Expertise in Docker, Kubernetes, Terraform',
        'CI/CD tools (GitLab, GitHub Actions, Jenkins)',
        'Cloud platforms (AWS, Azure, GCP)',
        'Scripting (Python, Bash, PowerShell)'
      ]
    },
    {
      title: 'Junior Network Administrator',
      department: 'Infrastructure',
      location: 'Johannesburg',
      type: 'Full-time',
      description: 'Support network operations, monitoring, and troubleshooting under senior engineer guidance.',
      requirements: [
        '1-2 years networking experience or relevant degree',
        'CCNA or studying towards certification',
        'Basic understanding of TCP/IP, VLANs, routing',
        'Eager to learn and grow technical skills',
        'Good problem-solving abilities'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! We will review your submission and get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      linkedin: '',
      coverLetter: '',
      resume: null
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-[#8eff7a]">Malcam</span> Team
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Build your career with cutting-edge technologies, industry certifications, and impactful projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Join Malcam?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than just a job - it's a career-defining opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8eff7a] to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Our Culture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-black mb-2">Innovation First</h4>
                <p className="text-gray-600">We embrace new technologies and encourage creative problem-solving.</p>
              </div>
              <div>
                <h4 className="font-bold text-black mb-2">Team Excellence</h4>
                <p className="text-gray-600">Collaboration, knowledge sharing, and mutual support drive our success.</p>
              </div>
              <div>
                <h4 className="font-bold text-black mb-2">Client Impact</h4>
                <p className="text-gray-600">Every project makes a real difference to enterprise operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore opportunities to work with cutting-edge technology
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#8eff7a] hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" /> {role.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" /> {role.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" /> {role.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                <div>
                  <h4 className="font-semibold text-black mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="text-[#8eff7a] mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Apply Now
              </h2>
              <p className="text-gray-600 text-lg">
                Submit your application and join our team
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Position Applied For *
                  </label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                  >
                    <option value="">Select a position</option>
                    {openRoles.map((role, idx) => (
                      <option key={idx} value={role.title}>{role.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Years of Experience *
                  </label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-2">
                  Cover Letter *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us why you're a great fit for this role..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a] resize-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-2">
                  Resume/CV * (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8eff7a]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8eff7a] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Submit Application <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
