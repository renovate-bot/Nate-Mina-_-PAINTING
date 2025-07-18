import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paintbrush, Home, Building, Palette, Shield, Clock, CheckCircle, Calendar } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const PaintingServices = () => {
  const [bookingModal, setBookingModal] = useState<{isOpen: boolean; serviceType: 'cleaning' | 'painting' | ''}>({
    isOpen: false,
    serviceType: 'painting'
  });

  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: 'Interior Painting',
      description: 'Transform your living spaces with professional interior painting services.',
      features: ['Walls & Ceilings', 'Trim & Molding', 'Cabinets & Doors', 'Specialty Finishes'],
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1'
    },
    {
      icon: <Building className="h-8 w-8 text-teal-600" />,
      title: 'Exterior Painting',
      description: 'Protect and beautify your home\'s exterior with weather-resistant paints.',
      features: ['Siding & Stucco', 'Trim & Shutters', 'Decks & Fences', 'Pressure Washing'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1'
    },
    {
      icon: <Palette className="h-8 w-8 text-orange-600" />,
      title: 'Color Consultation',
      description: 'Expert color selection and design consultation for your project.',
      features: ['Color Matching', 'Design Advice', 'Sample Testing', 'Trend Analysis'],
      image: 'https://images.pexels.com/photos/1154511/pexels-photo-1154511.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We discuss your vision, assess the space, and provide detailed estimates.'
    },
    {
      step: '2',
      title: 'Preparation',
      description: 'Thorough surface preparation including cleaning, sanding, and priming.'
    },
    {
      step: '3',
      title: 'Painting',
      description: 'Professional application using premium materials and proven techniques.'
    },
    {
      step: '4',
      title: 'Cleanup',
      description: 'Complete cleanup and final inspection to ensure your satisfaction.'
    }
  ];

  const benefits = [
    'Licensed and Insured',
    'Premium Quality Materials',
    'Expert Surface Preparation',
    'Color Matching Services',
    'Flexible Scheduling',
    'Satisfaction Guarantee'
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white">
        <div 
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <Paintbrush className="h-16 w-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Painting Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your home with expert interior and exterior painting services. 
                Quality workmanship and premium materials guaranteed.
              </p>
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get Free Estimate
              </Link>
              <button
                onClick={() => setBookingModal({isOpen: true, serviceType: 'painting'})}
                className="bg-white border-2 border-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Painting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From interior rooms to exterior surfaces, we provide comprehensive painting solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setBookingModal({isOpen: true, serviceType: 'painting'})}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Painting Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Project completion on time and within budget</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">100% satisfaction guarantee on all work</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
              alt="Professional painting work"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Painting Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed estimate for your painting needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </Link>
            <button
              onClick={() => setBookingModal({isOpen: true, serviceType: 'painting'})}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Service</span>
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({isOpen: false, serviceType: 'painting'})}
        serviceType={bookingModal.serviceType}
      />
    </div>
  );
};

export default PaintingServices;