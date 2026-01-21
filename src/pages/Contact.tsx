import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      console.log('Form submission:', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      });

      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviceAreas = [
    'Multimodal Logistics (Sea, Air, Road)',
    'Fuel & Energy Supply Solutions',
    'China-Africa Trade & Import Services',
    'Warehousing & Distribution',
    'Supply Chain Management',
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Let's secure your supply chain. Reach out to discuss your logistics requirements.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                Whether you need integrated logistics solutions, fuel supply services, or China-Africa trade support,
                our team is ready to help you optimize your supply chain.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 mb-8 sm:mb-12"
              >
                {[
                  { icon: MapPin, title: 'Our Locations', content: 'China, Kenya, South Sudan', detail: 'Strategic offices across the China-Africa corridor for seamless coordination' },
                  { icon: Mail, title: 'Email', content: 'info@amirlogistics.com', detail: 'We respond to all inquiries within 24 hours' },
                  { icon: Phone, title: 'Phone', content: 'Contact us for phone inquiries', detail: 'Available during business hours across all time zones' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ x: 8 }}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-amber-500 rounded-lg p-3 flex-shrink-0"
                    >
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-slate-600 text-sm sm:text-base">{item.content}</p>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2">{item.detail}</p>
                    </div>
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
                <h3 className="font-semibold text-slate-900 mb-4 text-sm sm:text-base">Service Areas</h3>
                <div className="space-y-3">
                  {serviceAreas.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-green-800 text-sm sm:text-base">
                      Thank you for your message. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start"
                  >
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 text-sm sm:text-base font-semibold mb-1">
                        Submission Failed
                      </p>
                      <p className="text-red-700 text-xs sm:text-sm">
                        {errorMessage || 'There was an error submitting your message. Please try again.'}
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base touch-manipulation"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base touch-manipulation"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base touch-manipulation"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base touch-manipulation"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-sm sm:text-base touch-manipulation"
                      placeholder="Tell us about your logistics requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-500 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base touch-manipulation"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
