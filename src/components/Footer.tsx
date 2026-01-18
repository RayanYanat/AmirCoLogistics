import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full group-hover:bg-amber-500/30 transition-all duration-300"></div>
                <img
                  src="/logo_2.0.svg"
                  alt="Amir & Co Logistics"
                  className="h-12 w-12 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-300 group-hover:text-slate-100 transition-colors">
                  AMIR & CO: LOGISTICS
                </div>
                <div className="text-xs text-slate-400">Amir Enterprises Ltd</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-300 max-w-md">
              End-to-End Logistics & Supply Chain Solutions Connecting China to Africa.
              Trusted partner since 2016 for corporations, governments, and NGOs.
            </p>
            <p className="text-xs text-slate-500">
              © 2024 Amir Enterprises Ltd. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
              <li><Link to="/warehousing" className="hover:text-amber-500 transition-colors">Warehousing</Link></li>
              <li><Link to="/experience" className="hover:text-amber-500 transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>China, Kenya, South Sudan</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>info@amirlogistics.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Contact for inquiries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
