import { Building2, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudies({ onNavigate }: CaseStudiesProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#8eff7a]">Success Stories</span> from Real Clients
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Discover how we've helped organizations across South Africa transform their IT infrastructure and deliver reliable solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-12">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-black mb-3">Case Studies Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We're currently preparing detailed case studies showcasing our work across Public Sector, Financial Services, Hospitality, Retail, and Telecommunications sectors.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#8eff7a] text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our comprehensive IT solutions.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Talk to Our Team <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
