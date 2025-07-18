import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'cleaning' | 'painting' | '';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: serviceType,
    subService: '',
    date: '',
    time: '',
    message: '',
    urgency: 'standard'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cleaningServices = [
    'Regular House Cleaning',
    'Deep Cleaning',
    'Move-in/Move-out Cleaning',
    'Post-Construction Cleaning',
    'Office Cleaning',
    'Emergency Cleaning'
  ];

  const paintingServices = [
    'Interior Painting',
    'Exterior Painting',
    'Cabinet Painting',
    'Trim & Molding',
    'Deck Staining',
    'Color Consultation'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: serviceType,
        subService: '',
        date: '',
        time: '',
        message: '',
        urgency: 'standard'
      });
      onClose();
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            Book {serviceType === 'cleaning' ? 'Cleaning' : 'Painting'} Service
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600">
              We'll contact you within 2 hours to confirm your appointment details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Step {currentStep} of 3</span>
                <span className="text-sm text-gray-500">
                  {currentStep === 1 ? 'Service Details' : currentStep === 2 ? 'Schedule' : 'Contact Info'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="painting">Painting Services</option>
                  </select>
                </div>

                {formData.service && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Service
                    </label>
                    <select
                      name="subService"
                      value={formData.subService}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Specific Service</option>
                      {(formData.service === 'cleaning' ? cleaningServices : paintingServices).map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your property address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="standard">Standard (3-5 days)</option>
                    <option value="priority">Priority (1-2 days) - +20%</option>
                    <option value="emergency">Emergency (Same day) - +50%</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Schedule */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please provide any specific requirements, room count, square footage, or special instructions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Service:</strong> {formData.subService || formData.service}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                    <p><strong>Urgency:</strong> {formData.urgency}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 pt-4 border-t">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-4 py-2 rounded-md ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && (!formData.service || !formData.subService || !formData.address)) ||
                    (currentStep === 2 && (!formData.date || !formData.time))
                  }
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;