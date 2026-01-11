import { Warehouse, MapPin, Package, CheckCircle, Boxes } from 'lucide-react';

export default function Warehousing() {
  const locations = [
    {
      country: 'China',
      facilities: ['Strategic location for source procurement', 'Quality control and inspection', 'Container consolidation'],
    },
    {
      country: 'Kenya',
      facilities: ['Nairobi distribution hub', 'Cross-border coordination', 'Regional dispatch center'],
    },
    {
      country: 'South Sudan',
      cities: ['Juba', 'Wau', 'Aweil', 'Rumbek', 'Nimule', 'Wunrok'],
    },
  ];

  const services = [
    {
      icon: Package,
      title: 'Consolidation Services',
      description: 'Efficient cargo consolidation to optimize shipping costs and reduce complexity.',
    },
    {
      icon: Boxes,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and control systems for complete visibility.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Comprehensive inspection and verification at every handling point.',
    },
    {
      icon: Warehouse,
      title: 'Value-Added Services',
      description: 'Packing, labeling, and custom handling to meet your specific requirements.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Warehousing & Infrastructure</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Strategic warehousing facilities across three countries with over 1 million liters of storage capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Warehouse Network</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Strategically positioned facilities across the China-Africa corridor for efficient distribution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-lg mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{location.country}</h3>
                {location.facilities && (
                  <ul className="space-y-3">
                    {location.facilities.map((facility, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <span className="text-amber-500 mr-2">•</span>
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {location.cities && (
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">Cities:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.cities.map((city, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 border border-slate-200"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">1M+</div>
                <div className="text-slate-300">Liters Storage Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">9</div>
                <div className="text-slate-300">Strategic Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-500 mb-2">3</div>
                <div className="text-slate-300">Countries Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Warehouse Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive value-added services to support your supply chain operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">South Sudan Operations</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our extensive network across South Sudan enables rapid response and reliable delivery even in the most challenging locations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Lakes Region</h4>
                    <p className="text-slate-600">Strategic coverage across the Lakes state</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Equatoria Region</h4>
                    <p className="text-slate-600">Comprehensive operations in Equatoria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Greater Bahr el Ghazal</h4>
                    <p className="text-slate-600">Extensive infrastructure in Bahr el Ghazal region</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Capabilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-slate-700">
                  <span className="text-amber-500 font-bold mr-3">→</span>
                  <span>Rapid dispatch and delivery coordination</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-amber-500 font-bold mr-3">→</span>
                  <span>High-security storage for sensitive materials</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-amber-500 font-bold mr-3">→</span>
                  <span>Remote site delivery expertise</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-amber-500 font-bold mr-3">→</span>
                  <span>Real-time inventory tracking systems</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-amber-500 font-bold mr-3">→</span>
                  <span>24/7 operational support</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-amber-500 font-bold mr-3">→</span>
                  <span>Cross-docking and transloading services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
