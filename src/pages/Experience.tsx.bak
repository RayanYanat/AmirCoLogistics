import { Award, TrendingUp, Building2, MapPin, Fuel, CheckCircle } from 'lucide-react';

export default function Experience() {
  const achievements = [
    {
      icon: Award,
      metric: '4M+',
      label: 'Liters Delivered Annually',
      description: 'Consistent fuel supply across multiple sectors',
    },
    {
      icon: MapPin,
      metric: '200+',
      label: 'Operational Sites',
      description: 'Extensive coverage across challenging terrain',
    },
    {
      icon: Building2,
      metric: '8+',
      label: 'Years Experience',
      description: 'Proven track record since 2016',
    },
    {
      icon: Fuel,
      metric: '5+',
      label: 'Years Telecom Supply',
      description: 'Trusted partner for MTN & ZAIN South Sudan',
    },
  ];

  const regions = [
    {
      name: 'Lakes Region',
      description: 'Comprehensive logistics coverage across Lakes state with multiple distribution points',
    },
    {
      name: 'Equatoria',
      description: 'Strategic operations throughout Equatoria with focus on cross-border coordination',
    },
    {
      name: 'Greater Bahr el Ghazal',
      description: 'Extensive warehouse network and fuel supply infrastructure',
    },
  ];

  const capabilities = [
    'Remote and high-risk environment operations',
    'High-security site delivery expertise',
    'Emergency response and rapid deployment',
    'Multi-sector experience (telecom, construction, relief)',
    'Proven vendor reliability and quality control',
    'Complex regulatory navigation',
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Experience & Capacity</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Proven expertise delivering reliable logistics solutions in Africa's most challenging environments since 2016.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to operational excellence and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-amber-600 mb-3">{item.label}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Telecom Sector Expertise</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Since 2019, we have been the trusted fuel supplier for major telecommunications providers in South Sudan,
                delivering over 4 million liters annually to more than 200 operational sites.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">MTN South Sudan</h4>
                      <p className="text-sm text-slate-600">Fuel supply partner since 2019</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Consistent delivery to tower sites across all regions with zero security incidents.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">ZAIN South Sudan</h4>
                      <p className="text-sm text-slate-600">Fuel supply partner since 2019</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Reliable fuel supply maintaining network uptime across challenging locations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Operational Excellence</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Consistent Performance</h4>
                    <p className="text-slate-300 text-sm">
                      Maintained 99%+ on-time delivery rate across all sites for 5 consecutive years.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-slate-300 text-sm">
                      Strict quality control protocols ensuring fuel integrity at every delivery point.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Safety Record</h4>
                    <p className="text-slate-300 text-sm">
                      Zero major incidents across millions of liters delivered in high-risk environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Regional Coverage</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Extensive operations across South Sudan's most challenging regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {regions.map((region, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <MapPin className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{region.name}</h3>
                <p className="text-slate-600 leading-relaxed">{region.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Core Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
