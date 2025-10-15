import { useEffect, useState } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { CaseStudy } from '../types';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export default function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setCaseStudies(data);
    }
    setLoading(false);
  };

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
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-[#8eff7a] rounded-full animate-spin"></div>
            </div>
          ) : caseStudies.length === 0 ? (
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
          ) : (
            <div className="space-y-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12 hover:border-[#8eff7a] hover:shadow-xl transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mb-4">
                        {study.industry}
                      </div>
                      <h2 className="text-3xl font-bold text-black mb-4">{study.title}</h2>
                      <p className="text-gray-600 text-lg mb-6">{study.client_name}</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold text-black mb-2">Challenge</h3>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="font-bold text-black mb-2">Solution</h3>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="font-bold text-black mb-2">Outcomes</h3>
                          <p className="text-gray-600 leading-relaxed">{study.outcomes}</p>
                        </div>

                        {study.technologies && study.technologies.length > 0 && (
                          <div>
                            <h3 className="font-bold text-black mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-lg text-sm text-gray-700">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      {study.testimonial && (
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                          <div className="text-4xl text-[#8eff7a] mb-2">"</div>
                          <p className="text-gray-700 italic leading-relaxed">{study.testimonial}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
