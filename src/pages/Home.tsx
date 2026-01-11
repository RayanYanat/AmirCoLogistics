import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Fuel, Globe, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  const highlights = [
    {
      icon: Ship,
      title: 'Multimodal Logistics',
      description: 'Integrated Sea, Air, and Road transport solutions',
    },
    {
      icon: Fuel,
      title: 'Fuel & Energy Supply',
      description: 'Specialized fuel supply to remote and high-security sites',
    },
    {
      icon: Globe,
      title: 'China-Africa Trade',
      description: 'LCL shared container solutions with transparent pricing',
    },
    {
      icon: Shield,
      title: 'Proven in Challenging Environments',
      description: 'Operating in remote and high-risk locations since 2016',
    },
  ];

  const values = [
    { icon: Clock, text: 'Predictable Lead Times' },
    { icon: Shield, text: 'End-to-End Security' },
    { icon: Award, text: 'Quality Assurance' },
    { icon: Globe, text: 'Global Network' },
  ];

  const stats = [
    { value: 4000000, suffix: '+', label: 'Liters Delivered' },
    { value: 200, suffix: '+', label: 'Operational Sites' },
    { value: 8, suffix: '+', label: 'Years Experience' },
    { value: 3, suffix: '', label: 'Countries Coverage' },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZoOHptLTE2IDB2OGgtOFYxNmg4em0xNiAxNnY4aC04di04aDh6bS0xNiAwdjhoLTh2LThoOHptMTYgMTZ2OGgtOHYtOGg4em0tMTYgMHY4aC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full"
            >
              <span className="text-amber-500 text-sm font-semibold">Since 2016</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4"
            >
              End-to-End Logistics & Supply Chain Solutions
              <span className="block text-amber-500 mt-2">Connecting China to Africa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto px-4"
            >
              Secure your supply chain with reliable, efficient, and cost-effective logistics solutions.
              Trusted partner for corporations, governments, and international organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all backdrop-blur-sm border border-white/20 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 px-4">
              Why Choose AMIR & CO: LOGISTICS
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Comprehensive logistics solutions backed by years of experience in Africa's most challenging environments
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all border border-slate-200 hover:border-amber-500"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                >
                  <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Proven Track Record
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Since 2016, we have been delivering excellence in logistics, fuel supply, and supply chain management across Africa.
                  Our integrated approach eliminates multi-vendor risks and ensures predictable outcomes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{value.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 leading-tight break-words">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Ready to Secure Your Supply Chain?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Partner with a logistics provider that understands the complexities of China-Africa trade and has proven success in challenging environments.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
