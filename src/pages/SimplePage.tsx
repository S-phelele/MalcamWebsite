import { Video as LucideIcon } from 'lucide-react';

interface SimplePageProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

export default function SimplePage({ title, subtitle, icon: Icon, children, onNavigate }: SimplePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {Icon && <Icon className="w-16 h-16 text-[#8eff7a] mx-auto mb-6" />}
            <h1 className="text-4xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: title }} />
            {subtitle && <p className="text-lg text-gray-300 leading-relaxed">{subtitle}</p>}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
