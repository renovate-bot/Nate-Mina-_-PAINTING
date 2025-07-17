import React from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush, Sparkles, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Paintbrush className="h-8 w-8 text-blue-400" />
                <Sparkles className="h-6 w-6 text-teal-400" />
              </div>
              <div className="text-xl font-bold">Subrina's Services</div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional painting and house cleaning services for homeowners and property managers. 
              Quality workmanship and reliable service you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/painting-services" className="hover:text-white transition-colors">Interior Painting</Link></li>
              <li><Link to="/painting-services" className="hover:text-white transition-colors">Exterior Painting</Link></li>
              <li><Link to="/cleaning-services" className="hover:text-white transition-colors">House Cleaning</Link></li>
              <li><Link to="/cleaning-services" className="hover:text-white transition-colors">Deep Cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@subrinaservices.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Greater Metropolitan Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Subrina's Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;