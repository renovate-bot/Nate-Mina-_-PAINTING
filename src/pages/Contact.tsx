import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import ServiceCalculator from '../components/ServiceCalculator';

const Contact = () => {
  const [bookingModal, setBookingModal] = useState<{isOpen: boolean; serviceType: 'cleaning' | 'painting' | ''}>({
    isOpen: false,
    serviceType: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    address: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        address: '',
        preferredDate: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone',
      content: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: 'Email',
      content: 'info@subrinaservices.com',
      link: 'mailto:info@subrinaservices.com'
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: 'Service Area',
      content: 'Greater Metropolitan Area',
      link: '#'
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: 'Hours',
      content: 'Mon-Sat: 8AM-6PM',
      link: '#'
    }
  ];

  const serviceAreas = [
    'Downtown District',
    'Suburban Communities',
    'Historic Neighborhoods',
    'New Development Areas',
    'Waterfront Properties',
    'Business Districts'
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white">
        <div 
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Ready to transform your space? Get in touch for a free consultation 
                and personalized quote for your painting or cleaning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.link !== '#' ? (
                <a 
                  href={info.link}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600">{info.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your message and will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="interior-painting">Interior Painting</option>
                      <option value="exterior-painting">Exterior Painting</option>
                      <option value="regular-cleaning">Regular Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="move-cleaning">Move-in/Move-out Cleaning</option>
                      <option value="both">Both Painting & Cleaning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time preference</option>
                      <option value="morning">Morning (8AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-5PM)</option>
                      <option value="evening">Evening (5PM-8PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your project, including square footage, number of rooms, or specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Service Areas and Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Service Areas
              </h3>
              <p className="text-gray-600 mb-6">
                We proudly serve the greater metropolitan area, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                    <p className="text-gray-600">We'll contact you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                    <p className="text-gray-600">On-site assessment and detailed quote</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                    <p className="text-gray-600">Work around your schedule</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Emergency Services
              </h3>
              <p className="text-gray-600 mb-4">
                Need immediate assistance? We offer emergency cleaning services 
                for urgent situations.
              </p>
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: (555) 123-4567</span>
              </a>
              <button
                onClick={() => setBookingModal({isOpen: true, serviceType: ''})}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Online</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Calculator
          </h2>
          <p className="text-xl text-gray-600">
            Get an instant estimate for your project
          </p>
        </div>
        <ServiceCalculator />
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({isOpen: false, serviceType: ''})}
        serviceType={bookingModal.serviceType}
      />
    </div>
  );
};

export default Contact;