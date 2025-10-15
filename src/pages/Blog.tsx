import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      title: 'ADC vs. Cloud Load Balancers: When to Choose What',
      author: 'Malcam Engineering Team',
      date: 'October 5, 2025',
      readTime: '8 min read',
      category: 'Infrastructure',
      excerpt: 'F5 and NSX ALB insights: Understanding the key differences and making the right choice for your application delivery needs.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'POPIA and WhatsApp Campaigns: A Practical Checklist',
      author: 'Malcam Legal & Technical Team',
      date: 'October 1, 2025',
      readTime: '6 min read',
      category: 'Compliance',
      excerpt: 'Ensure your WhatsApp Business messaging campaigns comply with South African data protection laws.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Observability for South African Enterprises',
      author: 'Malcam Monitoring Team',
      date: 'September 28, 2025',
      readTime: '10 min read',
      category: 'Monitoring',
      excerpt: 'Evolution from basic network monitoring to comprehensive observability platforms for modern IT environments.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Compliance', 'Monitoring', 'Security'];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources & <span className="text-[#8eff7a]">Insights</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expert guidance on IT infrastructure, security, compliance, and modern application delivery
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#8eff7a] text-black'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#8eff7a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#8eff7a] hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" /> {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {article.readTime}
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="flex items-center text-[#8eff7a] font-semibold hover:text-green-600 transition-colors"
                  >
                    Read article <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#8eff7a] to-green-500">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 text-black mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Stay Updated
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest insights on infrastructure, security, and IT best practices
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-black focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
