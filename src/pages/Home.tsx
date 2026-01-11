import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Fuel, Globe, Shield, Clock, Award } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Ship,
      title: 'Multimodal Logistics',
      description: 'Integrated Sea, Air, and Road transport solutions',
    },
    {
      icon: Fuel,
      title: 'Fuel & Energy Supply',
      description: 'Specialized fuel supply to remote and high-security sites',
    },
    {
      icon: Globe,
      title: 'China-Africa Trade',
      description: 'LCL shared container solutions with transparent pricing',
    },
    {
      icon: Shield,
      title: 'Proven in Challenging Environments',
      description: 'Operating in remote and high-risk locations since 2016',
    },
  ];

  const values = [
    { icon: Clock, text: 'Predictable Lead Times' },
    { icon: Shield, text: 'End-to-End Security' },
    { icon: Award, text: 'Quality Assurance' },
    { icon: Globe, text: 'Global Network' },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZoOHptLTE2IDB2OGgtOFYxNmg4em0xNiAxNnY4aC04di04aDh6bS0xNiAwdjhoLTh2LThoOHptMTYgMTZ2OGgtOHYtOGg4em0tMTYgMHY4aC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <span className="text-amber-500 text-sm font-semibold">Since 2016</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              End-to-End Logistics & Supply Chain Solutions
              <span className="block text-amber-500 mt-2">Connecting China to Africa</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Secure your supply chain with reliable, efficient, and cost-effective logistics solutions.
              Trusted partner for corporations, governments, and international organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose AMIR & CO: LOGISTICS
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions backed by years of experience in Africa's most challenging environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all border border-slate-200 hover:border-amber-500"
              >
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Proven Track Record
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Since 2016, we have been delivering excellence in logistics, fuel supply, and supply chain management across Africa.
                  Our integrated approach eliminates multi-vendor risks and ensures predictable outcomes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <value.icon className="h-6 w-6 text-amber-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-amber-500 mb-2">4M+</div>
                  <div className="text-sm text-slate-300">Liters Delivered Annually</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-amber-500 mb-2">200+</div>
                  <div className="text-sm text-slate-300">Operational Sites</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-amber-500 mb-2">8+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-amber-500 mb-2">3</div>
                  <div className="text-sm text-slate-300">Countries Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Secure Your Supply Chain?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Partner with a logistics provider that understands the complexities of China-Africa trade and has proven success in challenging environments.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
