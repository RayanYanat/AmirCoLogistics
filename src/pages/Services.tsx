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
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6"
                  >
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">{service.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-50 rounded-lg p-4 sm:p-6 border border-slate-200"
                  >
                    <h3 className="font-semibold text-slate-900 mb-4 flex items-center text-sm sm:text-base">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700">
                          <span className="text-amber-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white h-full">
                    <h3 className="text-lg sm:text-xl font-bold mb-6">Service Features</h3>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-slate-200">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
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
