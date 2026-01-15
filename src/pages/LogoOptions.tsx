import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

export default function LogoOptions() {
  const logos = [
    {
      id: 1,
      name: 'Corporate Minimalist',
      description: 'Clean lettermark with geometric precision, perfect for corporate identity',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="280" height="180" viewBox="0 0 280 180">
            <defs>
              <linearGradient id="nav1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Icon: Abstract A with supply chain flow */}
            <path
              d="M 40 85 L 55 50 L 70 85 M 43 75 L 67 75"
              fill="none"
              stroke="url(#nav1)"
              strokeWidth="3"
              strokeLinecap="square"
            />
            <circle cx="40" cy="85" r="2.5" fill="#1e3a8a" />
            <circle cx="55" cy="50" r="2.5" fill="#1e3a8a" />
            <circle cx="70" cy="85" r="2.5" fill="#1e3a8a" />

            <line x1="75" y1="67.5" x2="85" y2="67.5" stroke="#94a3b8" strokeWidth="1" />

            {/* Text */}
            <text x="95" y="72" fill="#1e3a8a" fontSize="28" fontWeight="700" fontFamily="system-ui, -apple-system" letterSpacing="-0.5">
              AMIR & CO
            </text>
            <text x="95" y="85" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Forward Motion',
      description: 'Abstract arrow and container design symbolizing efficient logistics flow',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-slate-50">
          <svg width="280" height="180" viewBox="0 0 280 180">
            <defs>
              <linearGradient id="nav2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Icon: Container with forward arrow */}
            <rect x="30" y="55" width="35" height="28" fill="none" stroke="#1e3a8a" strokeWidth="2.5" rx="1" />
            <line x1="38" y1="55" x2="38" y2="83" stroke="#1e3a8a" strokeWidth="1.5" />
            <line x1="47" y1="55" x2="47" y2="83" stroke="#1e3a8a" strokeWidth="1.5" />
            <line x1="56" y1="55" x2="56" y2="83" stroke="#1e3a8a" strokeWidth="1.5" />

            <path d="M 65 69 L 78 69 L 78 63 L 88 69 L 78 75 L 78 69" fill="#3b82f6" />

            <line x1="93" y1="69" x2="103" y2="69" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="113" y="72" fill="#1e3a8a" fontSize="28" fontWeight="700" fontFamily="system-ui" letterSpacing="-0.5">
              AMIR & CO
            </text>
            <text x="113" y="85" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Global Network',
      description: 'Interconnected nodes representing worldwide logistics network',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="280" height="180" viewBox="0 0 280 180">
            {/* Icon: Network/supply chain nodes */}
            <circle cx="35" cy="60" r="4" fill="#1e3a8a" />
            <circle cx="55" cy="70" r="4" fill="#1e3a8a" />
            <circle cx="60" cy="85" r="4" fill="#3b82f6" />

            <line x1="35" y1="60" x2="55" y2="70" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="55" y1="70" x2="60" y2="85" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="35" y1="60" x2="60" y2="85" stroke="#e2e8f0" strokeWidth="1.5" />

            <line x1="70" y1="72.5" x2="85" y2="72.5" stroke="#e2e8f0" strokeWidth="1.5" />

            <text x="95" y="75" fill="#1e3a8a" fontSize="28" fontWeight="700" fontFamily="system-ui" letterSpacing="-0.5">
              AMIR & CO
            </text>
            <text x="95" y="88" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      name: 'Monogram Icon',
      description: 'Sophisticated monogram with subtle arrow element, works as app icon',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-slate-50">
          <svg width="280" height="180" viewBox="0 0 280 180">
            {/* Icon: Square monogram */}
            <rect x="28" y="52" width="40" height="40" fill="#1e3a8a" rx="4" />
            <text x="48" y="80" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="700" fontFamily="system-ui">
              A
            </text>
            <path d="M 52 83 L 58 83 L 58 81 L 62 85 L 58 89 L 58 87 L 52 87" fill="rgba(255,255,255,0.7)" />

            <line x1="73" y1="72" x2="88" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="98" y="75" fill="#1e3a8a" fontSize="28" fontWeight="700" fontFamily="system-ui" letterSpacing="-0.5">
              AMIR & CO
            </text>
            <text x="98" y="88" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 5,
      name: 'Typography Focus',
      description: 'Pure typography solution with subtle geometric accent, ultimate versatility',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="280" height="180" viewBox="0 0 280 180">
            {/* Minimal geometric accent */}
            <rect x="35" y="65" width="3" height="18" fill="#1e3a8a" />
            <rect x="41" y="60" width="3" height="23" fill="#3b82f6" />
            <rect x="47" y="67" width="3" height="16" fill="#60a5fa" />

            <line x1="55" y1="73.5" x2="70" y2="73.5" stroke="#e2e8f0" strokeWidth="1.5" />

            <text x="80" y="76" fill="#1e3a8a" fontSize="30" fontWeight="700" fontFamily="system-ui" letterSpacing="-0.5">
              AMIR & CO
            </text>
            <text x="80" y="90" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 6,
      name: 'Stacked Monochrome',
      description: 'Elegant stacked layout, perfect for monochrome use and small spaces',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-slate-50">
          <svg width="200" height="180" viewBox="0 0 200 180">
            <g transform="translate(100, 90)">
              {/* Icon above text */}
              <rect x="-20" y="-50" width="40" height="35" fill="none" stroke="#1e3a8a" strokeWidth="2.5" rx="2" />
              <line x1="-12" y1="-50" x2="-12" y2="-15" stroke="#1e3a8a" strokeWidth="1.5" />
              <line x1="-4" y1="-50" x2="-4" y2="-15" stroke="#1e3a8a" strokeWidth="1.5" />
              <line x1="4" y1="-50" x2="4" y2="-15" stroke="#1e3a8a" strokeWidth="1.5" />
              <line x1="12" y1="-50" x2="12" y2="-15" stroke="#1e3a8a" strokeWidth="1.5" />

              <text x="0" y="0" textAnchor="middle" fill="#1e3a8a" fontSize="24" fontWeight="700" fontFamily="system-ui" letterSpacing="-0.5">
                AMIR & CO
              </text>
              <text x="0" y="13" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
                LOGISTICS
              </text>
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 7,
      name: 'Premium Geometric',
      description: 'Sophisticated hexagonal badge with minimal design, excellent for luxury branding',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="280" height="180" viewBox="0 0 280 180">
            {/* Icon: Hexagon with centered element */}
            <polygon
              points="48,58 62,50 76,58 76,74 62,82 48,74"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="2.5"
            />
            <polygon
              points="56,62 62,59 68,62 68,70 62,73 56,70"
              fill="#3b82f6"
            />

            <line x1="81" y1="66" x2="96" y2="66" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="106" y="69" fill="#1e3a8a" fontSize="28" fontWeight="700" fontFamily="system-ui" letterSpacing="-0.5">
              AMIR & CO
            </text>
            <text x="106" y="82" fill="#64748b" fontSize="10" fontWeight="500" fontFamily="system-ui" letterSpacing="2.5">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Premium Logo Concepts</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Minimalist, corporate-focused logo designs for Amir & Co: Logistics. Each concept emphasizes clean lines, professional typography, and versatile scalability for modern brand applications.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200"
              >
                <div className="relative">
                  {logo.component}
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-amber-500 font-semibold text-sm">Option {logo.id}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{logo.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{logo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Design Philosophy</h2>
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Professional Color Palette:</strong> Navy blue (#1e3a8a) and gray tones convey trust, stability, and corporate sophistication. Optional blue accent (#3b82f6) adds subtle energy.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Minimalist Approach:</strong> Clean geometric forms and restrained symbolism create timeless, premium appeal without decorative excess.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Monochrome Ready:</strong> All designs work perfectly in single-color applications for maximum versatility across media.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Scalable & Responsive:</strong> Geometric precision ensures perfect clarity from favicon to billboard, with options for icon-only or full wordmark use.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Logistics Symbolism:</strong> Subtle references to containers, supply chains, global networks, and forward movement without literal imagery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
