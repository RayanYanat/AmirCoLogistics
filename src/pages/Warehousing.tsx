import { Warehouse, MapPin, Package, CheckCircle, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

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

  const capabilities = [
    'Rapid dispatch and delivery coordination',
    'High-security storage for sensitive materials',
    'Remote site delivery expertise',
    'Real-time inventory tracking systems',
    '24/7 operational support',
    'Cross-docking and transloading services',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Warehousing & Infrastructure</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Strategic warehousing facilities across three countries with over 1 million liters of storage capacity.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Warehouse Network</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Strategically positioned facilities across the China-Africa corridor for efficient distribution
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <img
              src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Modern warehouse facility with organized logistics"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-lg mb-6"
                >
                  <MapPin className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{location.country}</h3>
                {location.facilities && (
                  <ul className="space-y-3">
                    {location.facilities.map((facility, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700">
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
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-3 py-1 bg-white rounded-full text-xs sm:text-sm text-slate-700 border border-slate-200"
                        >
                          {city}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 md:p-12 text-white"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">1M+</div>
                <div className="text-sm sm:text-base text-slate-300">Liters Storage Capacity</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">9</div>
                <div className="text-sm sm:text-base text-slate-300">Strategic Locations</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">3</div>
                <div className="text-sm sm:text-base text-slate-300">Countries Coverage</div>
              </motion.div>
            </div>
          </motion.div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Warehouse Services</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive value-added services to support your supply chain operations
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-amber-500 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-6"
                >
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">South Sudan Operations</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Our extensive network across South Sudan enables rapid response and reliable delivery even in the most challenging locations.
              </p>
              <div className="space-y-4">
                {['Lakes Region', 'Equatoria Region', 'Greater Bahr el Ghazal'].map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">{region}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">Strategic coverage across the region</p>
                    </div>
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
              <img
                src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Long haul freight truck for regional distribution"
                className="w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/8985607/pexels-photo-8985607.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern warehouse facility with logistics operations and storage infrastructure"
                className="w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 order-1 lg:order-2"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">Key Capabilities</h3>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start text-sm sm:text-base text-slate-700"
                  >
                    <span className="text-amber-500 font-bold mr-3">→</span>
                    <span>{capability}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
