import { Ship, Fuel, Globe, Warehouse, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Services() {
  const services = [
    {
      icon: Ship,
      title: 'Integrated Transport & Multimodal Logistics',
      description: 'Comprehensive sea, air, and road transport solutions with origin-to-destination management.',
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Cargo containers and multimodal transport',
      features: [
        'Sea freight forwarding',
        'Air cargo services',
        'Road transport across East Africa',
        'China-Africa corridor specialization',
        'Centralized coordination',
        'Predictable lead times',
        'Risk elimination through single-vendor approach',
      ],
    },
    {
      icon: Fuel,
      title: 'Fuel Supply & Energy Solutions',
      description: 'Specialized fuel supply chain management for telecom, industrial, and remote operations.',
      image: 'https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Fuel tanker truck and energy distribution logistics operations',
      features: [
        'Bulk and retail fuel supply',
        'High-security site delivery',
        'Remote location expertise',
        'Over 1 million liters storage capacity',
        'Strict quality control',
        'End-to-end fuel supply chain management',
        'Proven telecom sector experience (MTN, ZAIN)',
      ],
    },
    {
      icon: Globe,
      title: 'China-Africa Trade & Import Solutions',
      description: 'Efficient LCL shared container services with transparent all-in pricing and quality control at source.',
      image: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'International shipping containers at port',
      features: [
        'Shared Container (LCL) model',
        'China-based procurement agents',
        'Quality control at source',
        'Transparent all-in pricing',
        'Coverage to Kenya & South Sudan',
        'No hidden costs or border fees',
        'Comprehensive documentation handling',
      ],
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'Strategic warehousing facilities across China, Kenya, and South Sudan with comprehensive value-added services.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Modern warehouse facility with organized inventory',
      features: [
        'Multiple locations (China, Kenya, South Sudan)',
        'Over 1 million liters storage capacity',
        'Consolidation and cross-docking',
        'Inventory control and management',
        'Packing and labeling services',
        'Rapid dispatch capabilities',
      ],
    },
    {
      icon: Shield,
      title: 'Supply Chain & Regulatory Support',
      description: 'Expert guidance through complex regulatory environments and customs procedures.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Corporate logistics operations and supply chain management',
      features: [
        'Customs clearance and compliance',
        'Import/export documentation',
        'Regulatory navigation',
        'Risk assessment and mitigation',
        'Vendor management',
        'Supply chain optimization',
      ],
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Comprehensive logistics solutions designed to secure your supply chain and eliminate operational complexity.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0`}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent lg:bg-gradient-to-r"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                    className={`lg:col-span-3 p-6 sm:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4"
                    >
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </motion.div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">{service.description}</p>

                    <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center text-sm sm:text-base">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03, duration: 0.3 }}
                            className="flex items-start text-xs sm:text-sm text-slate-700"
                          >
                            <span className="text-amber-500 mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let us handle the complexity of international logistics while you focus on growing your business.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
