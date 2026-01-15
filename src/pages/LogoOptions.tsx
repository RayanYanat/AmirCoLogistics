import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

export default function LogoOptions() {
  const logos = [
    {
      id: 1,
      name: 'Bold Lettermark',
      description: 'Strong, professional lettermark with the A monogram representing authority and reliability',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <svg width="220" height="180" viewBox="0 0 220 180">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 70 100 L 90 40 L 110 100 M 75 85 L 105 85"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="110" y="75" fill="#fbbf24" fontSize="24" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="-1">
              MIR
            </text>
            <text x="70" y="125" textAnchor="start" fill="#fff" fontSize="11" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="3">
              AMIR & CO
            </text>
            <text x="70" y="140" textAnchor="start" fill="#94a3b8" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="2">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Classic Crest',
      description: 'Traditional shield emblem design symbolizing trust and heritage in logistics',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="200" height="180" viewBox="0 0 200 180">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 100 30 L 140 45 L 140 90 Q 140 120, 100 140 Q 60 120, 60 90 L 60 45 Z"
              fill="url(#shieldGrad)"
              stroke="#d97706"
              strokeWidth="3"
            />
            <text x="100" y="85" textAnchor="middle" fill="#fbbf24" fontSize="42" fontWeight="900" fontFamily="Georgia, serif">
              A
            </text>
            <text x="100" y="155" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">
              AMIR & CO
            </text>
            <text x="100" y="170" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="2">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Modern Wordmark',
      description: 'Clean, contemporary typography with geometric accent for modern appeal',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center">
            <svg width="240" height="180" viewBox="0 0 240 180">
              <rect x="20" y="55" width="8" height="45" fill="#d97706" rx="2" />
              <rect x="32" y="45" width="8" height="55" fill="#f59e0b" rx="2" />
              <rect x="44" y="35" width="8" height="65" fill="#fbbf24" rx="2" />

              <text x="70" y="75" fill="#1e293b" fontSize="36" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="-2">
                AMIR
              </text>
              <text x="70" y="95" fill="#64748b" fontSize="18" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="1">
                & CO
              </text>
              <rect x="70" y="105" width="100" height="3" fill="#f59e0b" />
              <text x="70" y="125" fill="#475569" fontSize="11" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="4">
                LOGISTICS
              </text>
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: 'Cargo Container',
      description: 'Iconic shipping container design representing global trade and logistics',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900">
          <svg width="240" height="180" viewBox="0 0 240 180">
            <rect x="60" y="50" width="120" height="60" fill="#1e293b" stroke="#f59e0b" strokeWidth="4" rx="3" />
            <line x1="60" y1="70" x2="180" y2="70" stroke="#475569" strokeWidth="2" />
            <line x1="60" y1="90" x2="180" y2="90" stroke="#475569" strokeWidth="2" />
            <line x1="90" y1="50" x2="90" y2="110" stroke="#475569" strokeWidth="2" />
            <line x1="120" y1="50" x2="120" y2="110" stroke="#475569" strokeWidth="2" />
            <line x1="150" y1="50" x2="150" y2="110" stroke="#475569" strokeWidth="2" />

            <text x="120" y="85" textAnchor="middle" fill="#fbbf24" fontSize="20" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="2">
              AMIR
            </text>

            <text x="120" y="135" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="2">
              AMIR & CO
            </text>
            <text x="120" y="150" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="2">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 5,
      name: 'Arrow Forward',
      description: 'Dynamic arrow design representing forward movement and progress',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="220" height="180" viewBox="0 0 220 180">
            <defs>
              <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 50 70 L 120 70 L 120 50 L 160 85 L 120 120 L 120 100 L 50 100 Z"
              fill="url(#arrowGrad)"
            />
            <text x="110" y="142" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="2">
              AMIR & CO
            </text>
            <text x="110" y="160" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="Arial, sans-serif" letterSpacing="3">
              LOGISTICS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 6,
      name: 'Circle Badge',
      description: 'Professional circular badge design with established company feel',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
          <svg width="200" height="180" viewBox="0 0 200 180">
            <circle cx="100" cy="85" r="60" fill="none" stroke="#fbbf24" strokeWidth="5" />
            <circle cx="100" cy="85" r="52" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.4" />

            <text x="100" y="75" textAnchor="middle" fill="#fbbf24" fontSize="32" fontWeight="900" fontFamily="Arial, sans-serif">
              AMIR
            </text>
            <text x="100" y="92" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600" fontFamily="Arial, sans-serif" letterSpacing="1">
              & CO
            </text>

            <path
              d="M 60 105 Q 100 108, 140 105"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />

            <text x="100" y="120" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="2">
              LOGISTICS
            </text>

            <text x="100" y="160" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="Arial, sans-serif" letterSpacing="1">
              AMIR ENTERPRISES LTD
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 7,
      name: 'Globe Routes',
      description: 'World map with connecting routes symbolizing international logistics network',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50">
          <svg width="220" height="180" viewBox="0 0 220 180">
            <circle cx="110" cy="70" r="45" fill="none" stroke="#334155" strokeWidth="3" />
            <ellipse cx="110" cy="70" rx="45" ry="20" fill="none" stroke="#334155" strokeWidth="2" opacity="0.3" />
            <ellipse cx="110" cy="70" rx="20" ry="45" fill="none" stroke="#334155" strokeWidth="2" opacity="0.3" />
            <line x1="110" y1="25" x2="110" y2="115" stroke="#334155" strokeWidth="1" opacity="0.3" />
            <line x1="65" y1="70" x2="155" y2="70" stroke="#334155" strokeWidth="1" opacity="0.3" />

            <circle cx="90" cy="55" r="3" fill="#f59e0b" />
            <circle cx="130" cy="85" r="3" fill="#f59e0b" />
            <circle cx="110" cy="70" r="3" fill="#d97706" />

            <path d="M 90 55 Q 100 62, 110 70" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2,2" />
            <path d="M 110 70 Q 120 77, 130 85" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2,2" />

            <text x="110" y="140" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">
              AMIR & CO
            </text>
            <text x="110" y="156" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="Arial, sans-serif" letterSpacing="3">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Logo Design Options</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Professional logo concepts for Amir & Co: Logistics, reflecting your expertise in supply chain management, warehousing, and global trade.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Design Notes</h2>
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Color Palette:</strong> Primary colors include slate/charcoal for professionalism and amber/orange for energy and reliability
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Symbolism:</strong> Each design incorporates elements representing connectivity, global reach, logistics networks, or forward movement
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Versatility:</strong> All logos are designed to work across digital and print media, from business cards to vehicle branding
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Scalability:</strong> Clean lines and strong shapes ensure legibility at any size
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
