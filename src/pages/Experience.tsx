import { Award, TrendingUp, Building2, MapPin, Fuel, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Experience() {
  const achievements = [
    {
      icon: Award,
      metric: 4000000,
      suffix: '+',
      label: 'Liters Delivered',
      description: 'Consistent fuel supply across multiple sectors',
    },
    {
      icon: MapPin,
      metric: 200,
      suffix: '+',
      label: 'Operational Sites',
      description: 'Extensive coverage across challenging terrain',
    },
    {
      icon: Building2,
      metric: 8,
      suffix: '+',
      label: 'Years Experience',
      description: 'Proven track record since 2016',
    },
    {
      icon: Fuel,
      metric: 5,
      suffix: '+',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Experience & Capacity</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Proven expertise delivering reliable logistics solutions in Africa's most challenging environments since 2016.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Track Record</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to operational excellence and reliability
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-xl transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6"
                >
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  <AnimatedCounter end={item.metric} suffix={item.suffix} duration={2.5} />
                </div>
                <div className="text-base sm:text-lg font-semibold text-amber-600 mb-3">{item.label}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Telecom Sector Expertise</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Since 2019, we have been the trusted fuel supplier for major telecommunications providers in South Sudan,
                delivering over 4 million liters annually to more than 200 operational sites.
              </p>

              <div className="space-y-4">
                {[
                  { company: 'MTN South Sudan', since: 'Fuel supply partner since 2019', desc: 'Consistent delivery to tower sites across all regions with zero security incidents.' },
                  { company: 'ZAIN South Sudan', since: 'Fuel supply partner since 2019', desc: 'Reliable fuel supply maintaining network uptime across challenging locations.' }
                ].map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">{client.company}</h4>
                        <p className="text-xs sm:text-sm text-slate-600">{client.since}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm">{client.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Operational Excellence</h3>
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, title: 'Consistent Performance', desc: 'Maintained 99%+ on-time delivery rate across all sites for 5 consecutive years.' },
                  { icon: CheckCircle, title: 'Quality Assurance', desc: 'Strict quality control protocols ensuring fuel integrity at every delivery point.' },
                  { icon: Award, title: 'Safety Record', desc: 'Zero major incidents across millions of liters delivered in high-risk environments.' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-slate-300 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Regional Coverage</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Extensive operations across South Sudan's most challenging regions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
          >
            {regions.map((region, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-all"
              >
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-amber-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{region.name}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{region.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">Core Capabilities</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ x: 8 }}
                  className="flex items-start bg-white rounded-lg p-4 hover:shadow-md transition-all"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700">{capability}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
