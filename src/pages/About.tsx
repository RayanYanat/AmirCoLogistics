import { Target, Eye, CheckCircle, Users } from 'lucide-react';

export default function About() {
  const values = [
    { name: 'Reliability', description: 'Consistent performance you can count on' },
    { name: 'Efficiency', description: 'Optimized processes for maximum productivity' },
    { name: 'Integrity', description: 'Transparent and ethical business practices' },
    { name: 'Customer Focus', description: 'Your success is our priority' },
    { name: 'Innovation', description: 'Continuous improvement and adaptation' },
    { name: 'Excellence', description: 'Unwavering commitment to quality' },
  ];

  const clients = [
    'Small & Medium Businesses',
    'Large Corporations',
    'Government Institutions',
    'Local NGOs',
    'International NGOs',
    'Import/Export Businesses',
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About AMIR & CO: LOGISTICS</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A specialized logistics arm of Amir Enterprises Ltd, delivering integrated supply chain solutions since 2016.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Founded in 2016, Amir Enterprises Ltd was established to meet the growing demands of procurement,
                  construction, and emergency relief operations across Africa. As our operations expanded, we recognized
                  the critical need for specialized, reliable logistics services in the region.
                </p>
                <p>
                  In response to this need, we created <strong>AMIR & CO: LOGISTICS</strong> as a dedicated logistics arm,
                  bringing together expertise in multimodal transport, fuel supply, warehousing, and China-Africa trade solutions.
                </p>
                <p>
                  Today, we serve corporations, government institutions, NGOs, and international partners across China, Kenya,
                  and South Sudan, with a proven track record of operating successfully in challenging and remote environments.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 rounded-lg p-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                    <p className="text-slate-700 leading-relaxed">
                      To secure our clients' supply chain through reliable, efficient, and cost-effective logistics solutions
                      that eliminate complexity and deliver predictable outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 rounded-lg p-3">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                    <p className="text-slate-700 leading-relaxed">
                      To empower African commerce by removing borders and barriers of international trade,
                      connecting businesses seamlessly across continents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Guiding principles that define how we serve our clients and conduct our business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <CheckCircle className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.name}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-amber-500 rounded-lg p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
                  <p className="text-slate-700 leading-relaxed">
                    Our success is built on the expertise of highly experienced professionals who understand
                    the complexities of international logistics and local operations.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Strategic Sourcing</h4>
                  <p className="text-slate-600 text-sm">Expert procurement from verified suppliers across China and Africa</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Customs & Compliance</h4>
                  <p className="text-slate-600 text-sm">Navigating complex regulations across multiple jurisdictions</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Quality Control</h4>
                  <p className="text-slate-600 text-sm">Rigorous inspection and verification at every stage</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Logistics Operations</h4>
                  <p className="text-slate-600 text-sm">Coordinated multimodal transport and warehousing management</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Clients</h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                We build trust-based partnerships with a diverse range of organizations,
                providing tailored logistics solutions that meet specific operational requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-6 hover:shadow-lg transition-all"
                  >
                    <CheckCircle className="h-6 w-6 text-amber-500 mb-2" />
                    <p className="font-medium">{client}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
