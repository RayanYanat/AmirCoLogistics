import { Target, Eye, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

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

  const teamAreas = [
    { title: 'Strategic Sourcing', description: 'Expert procurement from verified suppliers across China and Africa' },
    { title: 'Customs & Compliance', description: 'Navigating complex regulations across multiple jurisdictions' },
    { title: 'Quality Control', description: 'Rigorous inspection and verification at every stage' },
    { title: 'Logistics Operations', description: 'Coordinated multimodal transport and warehousing management' },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About AMIR & CO: LOGISTICS</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              A specialized logistics arm of Amir Enterprises Ltd, delivering integrated supply chain solutions since 2016.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
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
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern logistics operations and technology"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional logistics team collaboration"
                className="w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-amber-500 rounded-lg p-3 flex-shrink-0"
                  >
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Our Mission</h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      To secure our clients' supply chain through reliable, efficient, and cost-effective logistics solutions
                      that eliminate complexity and deliver predictable outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-amber-500 rounded-lg p-3 flex-shrink-0"
                  >
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Our Vision</h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      To empower African commerce by removing borders and barriers of international trade,
                      connecting businesses seamlessly across continents.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Guiding principles that define how we serve our clients and conduct our business
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-amber-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{value.name}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-amber-500 rounded-lg p-3 flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Our Team</h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Our success is built on the expertise of highly experienced professionals who understand
                    the complexities of international logistics and local operations.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {teamAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                    className="bg-slate-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{area.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Our Clients</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
                We build trust-based partnerships with a diverse range of organizations,
                providing tailored logistics solutions that meet specific operational requirements.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-5 sm:p-6 hover:shadow-lg transition-all"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mb-2" />
                    <p className="font-medium text-sm sm:text-base">{client}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
