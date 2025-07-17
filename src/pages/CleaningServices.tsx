import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Zap, Calendar, CheckCircle, Shield, Clock, Star } from 'lucide-react';

const CleaningServices = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8 text-teal-600" />,
      title: 'Regular Cleaning',
      description: 'Weekly, bi-weekly, or monthly cleaning services to maintain your home.',
      features: ['Kitchen & Bathrooms', 'Dusting & Vacuuming', 'Floor Mopping', 'Trash Removal'],
      price: 'Starting at $80/visit',
      image: 'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Deep Cleaning',
      description: 'Comprehensive deep cleaning for thorough sanitization and freshness.',
      features: ['Detailed Scrubbing', 'Appliance Cleaning', 'Baseboards & Windows', 'Disinfection'],
      price: 'Starting at $150/visit',
      image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1'
    },
    {
      icon: <Home className="h-8 w-8 text-orange-600" />,
      title: 'Move-In/Move-Out',
      description: 'Specialized cleaning for property transitions and real estate needs.',
      features: ['Empty Property Cleaning', 'Post-Construction', 'Real Estate Ready', 'Inspection Prep'],
      price: 'Starting at $200/visit',
      image: 'https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1'
    }
  ];

  const cleaningAreas = [
    'Living Areas', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Dining Rooms', 'Hallways',
    'Basements', 'Garages', 'Laundry Rooms', 'Home Offices', 'Stairs', 'Entryways'
  ];

  const benefits = [
    'Licensed & Insured',
    'Eco-Friendly Products',
    'Flexible Scheduling',
    'Background-Checked Staff',
    'Satisfaction Guarantee',
    'Competitive Pricing'
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-teal-700 text-white">
        <div 
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="absolute inset-0 bg-teal-900 opacity-85"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional House Cleaning Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Reliable, thorough cleaning services for busy homeowners and property managers. 
                Experience the difference of professional care.
              </p>
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Schedule Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to your specific needs and schedule
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
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-lg font-semibold text-teal-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cleaning Areas */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Clean
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cleaning coverage for every part of your home
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cleaningAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <span className="text-gray-700 font-medium">{area}</span>
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
              Why Choose Our Cleaning Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">Same-day and emergency cleaning available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700">Highly rated with 5-star customer reviews</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
              alt="Professional cleaning service"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach for consistent, quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Assessment',
                description: 'We evaluate your space and discuss your specific cleaning needs and preferences.'
              },
              {
                step: '2',
                title: 'Planning',
                description: 'Create a customized cleaning plan and schedule that fits your lifestyle.'
              },
              {
                step: '3',
                title: 'Cleaning',
                description: 'Professional cleaning using eco-friendly products and proven techniques.'
              },
              {
                step: '4',
                title: 'Inspection',
                description: 'Final walkthrough to ensure everything meets our high standards.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the peace of mind that comes with professional cleaning services. 
            Contact us today to schedule your cleaning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Schedule Cleaning
            </Link>
            <Link
              to="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-teal-700 transition-colors"
            >
              View Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningServices;