import { motion } from 'framer-motion';
import { Ship, Fuel, Globe, TrendingUp, Zap, Package } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function LogoOptions() {
  const logos = [
    {
      id: 1,
      name: 'Global Connection',
      description: 'Modern geometric design representing connectivity across continents',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
          <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-2xl">
            <circle cx="90" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="4" opacity="0.3" />
            <circle cx="90" cy="90" r="50" fill="none" stroke="#f59e0b" strokeWidth="4" opacity="0.5" />
            <path
              d="M 90 20 L 110 50 L 150 50 L 120 75 L 135 110 L 90 85 L 45 110 L 60 75 L 30 50 L 70 50 Z"
              fill="#f59e0b"
            />
            <circle cx="90" cy="90" r="15" fill="#fff" />
            <text x="90" y="150" textAnchor="middle" fill="#f59e0b" fontSize="18" fontWeight="bold" fontFamily="system-ui">
              EMBA
            </text>
            <text x="90" y="168" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="system-ui">
              TRANS-LINKS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Dynamic Routes',
      description: 'Abstract representation of shipping routes and logistics pathways',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <path
              d="M 30 90 Q 60 30, 90 90 T 150 90"
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M 30 110 Q 60 150, 90 110 T 150 110"
              fill="none"
              stroke="#fff"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.6"
            />
            <circle cx="30" cy="90" r="8" fill="#fff" />
            <circle cx="90" cy="90" r="10" fill="#fff" />
            <circle cx="150" cy="90" r="8" fill="#fff" />
            <rect x="60" y="140" width="60" height="30" rx="4" fill="#1e293b" />
            <text x="90" y="160" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="system-ui">
              EMBA
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Hexagon Shield',
      description: 'Strong geometric shape symbolizing reliability and security',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon
              points="90,25 145,60 145,120 90,155 35,120 35,60"
              fill="url(#hexGradient)"
              stroke="#1e293b"
              strokeWidth="3"
            />
            <polygon
              points="90,45 125,65 125,105 90,125 55,105 55,65"
              fill="#1e293b"
              opacity="0.9"
            />
            <text x="90" y="90" textAnchor="middle" fill="#f59e0b" fontSize="32" fontWeight="bold" fontFamily="system-ui">
              E
            </text>
            <text x="90" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui" letterSpacing="2">
              TRANS-LINKS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      name: 'Shipping Forward',
      description: 'Clean design with forward-moving ship silhouette',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl rotate-45 absolute top-0 left-0"></div>
                <Ship className="w-10 h-10 text-white relative z-10 ml-5 mt-5" strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold tracking-tight">EMBA</div>
              <div className="text-sm text-amber-500 font-semibold tracking-widest mt-1">TRANS-LINKS LTD</div>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-3"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      name: 'Interconnected Network',
      description: 'Modern network visualization representing global logistics',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <svg width="200" height="180" viewBox="0 0 200 180">
            <line x1="40" y1="60" x2="80" y2="90" stroke="#f59e0b" strokeWidth="3" opacity="0.6" />
            <line x1="160" y1="60" x2="120" y2="90" stroke="#f59e0b" strokeWidth="3" opacity="0.6" />
            <line x1="80" y1="90" x2="120" y2="90" stroke="#f59e0b" strokeWidth="4" />
            <line x1="100" y1="40" x2="100" y2="90" stroke="#f59e0b" strokeWidth="3" opacity="0.6" />

            <circle cx="40" cy="60" r="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="160" cy="60" r="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="100" cy="40" r="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="80" cy="90" r="10" fill="#f59e0b" />
            <circle cx="120" cy="90" r="10" fill="#f59e0b" />

            <rect x="50" y="120" width="100" height="40" rx="6" fill="#1e293b" />
            <text x="100" y="140" textAnchor="middle" fill="#f59e0b" fontSize="20" fontWeight="bold" fontFamily="system-ui">
              EMBA
            </text>
            <text x="100" y="154" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui" letterSpacing="1">
              TRANS-LINKS
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 6,
      name: 'Minimal Lettermark',
      description: 'Sophisticated monogram design with elegant typography',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <svg width="200" height="180" viewBox="0 0 200 180">
            <defs>
              <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            <rect x="60" y="50" width="80" height="80" rx="12" fill="url(#letterGradient)" />
            <rect x="65" y="55" width="70" height="70" rx="8" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.4" />

            <text x="100" y="105" textAnchor="middle" fill="#f59e0b" fontSize="52" fontWeight="900" fontFamily="system-ui">
              E
            </text>

            <text x="100" y="150" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="600" fontFamily="system-ui" letterSpacing="3">
              EMBA
            </text>
            <text x="100" y="165" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui" letterSpacing="2">
              TRANS-LINKS LTD
            </text>
          </svg>
        </div>
      ),
    },
    {
      id: 7,
      name: 'Compass & Globe',
      description: 'Navigation-inspired design representing global reach',
      component: (
        <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
          <svg width="200" height="180" viewBox="0 0 200 180">
            <circle cx="100" cy="80" r="50" fill="none" stroke="#1e293b" strokeWidth="3" />
            <circle cx="100" cy="80" r="45" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />

            <path d="M 100 35 L 105 75 L 100 80 L 95 75 Z" fill="#f59e0b" />
            <path d="M 100 125 L 105 85 L 100 80 L 95 85 Z" fill="#1e293b" opacity="0.6" />
            <path d="M 55 80 L 95 85 L 100 80 L 95 75 Z" fill="#1e293b" opacity="0.6" />
            <path d="M 145 80 L 105 75 L 100 80 L 105 85 Z" fill="#f59e0b" />

            <circle cx="100" cy="80" r="6" fill="#1e293b" />

            <text x="100" y="155" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="bold" fontFamily="system-ui">
              EMBA TRANS-LINKS
            </text>
            <text x="100" y="170" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="system-ui" letterSpacing="2">
              LOGISTICS SOLUTIONS
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
              Carefully crafted logo concepts for Emba Trans-Links Ltd, reflecting your expertise in logistics, supply chain management, and global connectivity.
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
