import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Paintbrush, Sparkles, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Paintbrush className="h-8 w-8 text-blue-600" />,
      title: 'Professional Painting',
      description: 'Expert interior and exterior painting services with premium materials and meticulous attention to detail.',
      features: ['Interior & Exterior', 'Color Consultation', 'Surface Preparation', 'Premium Materials'],
      link: '/painting-services'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-teal-600" />,
      title: 'House Cleaning',
      description: 'Comprehensive cleaning services for homes and properties, from regular maintenance to deep cleaning.',
      features: ['Regular Cleaning', 'Deep Cleaning', 'Move-in/Move-out', 'Eco-Friendly Options'],
      link: '/cleaning-services'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Services for Your Home
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your space with Subrina's expert painting and house cleaning services. 
                Quality workmanship and reliable service you can trust.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive painting and cleaning services to keep your property looking its best
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to={service.link}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              text: "Subrina's painting work transformed our home completely. Professional, clean, and absolutely beautiful results!",
              rating: 5
            },
            {
              name: "Mike Chen",
              text: "Regular cleaning service has been a game-changer for our busy family. Always thorough and reliable.",
              rating: 5
            },
            {
              name: "Lisa Rodriguez",
              text: "Both painting and cleaning services exceeded expectations. Quality work and great communication throughout.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold text-gray-900">- {testimonial.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/testimonials"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <span>Read More Reviews</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why homeowners trust Subrina's Services for all their painting and cleaning needs.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;