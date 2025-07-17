import React from 'react';
import { Star, Quote, User, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      service: "Interior Painting",
      rating: 5,
      date: "December 2024",
      text: "Subrina's team completely transformed our living room and kitchen. The attention to detail was incredible, and they finished ahead of schedule. The color consultation was spot-on, and we couldn't be happier with the results. Highly recommend!",
      project: "Complete interior renovation - 3 rooms"
    },
    {
      id: 2,
      name: "Mike Chen",
      service: "Regular Cleaning",
      rating: 5,
      date: "November 2024",
      text: "We've been using Subrina's cleaning service for over a year now, and they never disappoint. Always thorough, reliable, and professional. Coming home to a spotless house every week is such a blessing for our busy family.",
      project: "Bi-weekly house cleaning service"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      service: "Exterior Painting",
      rating: 5,
      date: "October 2024",
      text: "Outstanding work on our home's exterior! The team was professional, cleaned up thoroughly each day, and the paint job has held up beautifully through the recent storms. Great value for the quality of work.",
      project: "Full exterior house painting"
    },
    {
      id: 4,
      name: "David Thompson",
      service: "Deep Cleaning",
      rating: 5,
      date: "October 2024",
      text: "Hired Subrina for a deep cleaning before our family gathering. They went above and beyond - cleaned areas I didn't even think to mention. The house has never looked better. Will definitely use them again.",
      project: "Pre-event deep cleaning"
    },
    {
      id: 5,
      name: "Jennifer Walsh",
      service: "Both Services",
      rating: 5,
      date: "September 2024",
      text: "Used both painting and cleaning services for our home renovation. Subrina coordinated everything perfectly, and the quality of both services was exceptional. It's rare to find such versatility and expertise in one company.",
      project: "Home renovation - painting & cleaning"
    },
    {
      id: 6,
      name: "Robert Kim",
      service: "Move-out Cleaning",
      rating: 5,
      date: "September 2024",
      text: "Needed our rental property cleaned for new tenants. Subrina's team made it look brand new! They were efficient, thorough, and helped us get our security deposit back. Property manager was impressed too.",
      project: "Move-out cleaning service"
    },
    {
      id: 7,
      name: "Amanda Foster",
      service: "Kitchen Painting",
      rating: 5,
      date: "August 2024",
      text: "Cabinet painting transformed our outdated kitchen into a modern masterpiece. The prep work was meticulous, and the finish is flawless. Saved us thousands compared to replacing the cabinets entirely.",
      project: "Kitchen cabinet refinishing"
    },
    {
      id: 8,
      name: "Tom Bradley",
      service: "Regular Cleaning",
      rating: 5,
      date: "August 2024",
      text: "As a property manager, I've worked with many cleaning services. Subrina's team is consistently reliable, thorough, and professional. They handle multiple properties for us and always deliver quality results.",
      project: "Multiple property cleaning services"
    },
    {
      id: 9,
      name: "Maria Santos",
      service: "Interior Painting",
      rating: 5,
      date: "July 2024",
      text: "Subrina helped us choose the perfect colors for our nursery and master bedroom. The work was completed while we were on vacation, and we came back to a beautifully painted home. Stress-free experience!",
      project: "Nursery and bedroom painting"
    }
  ];

  const stats = [
    { value: '4.9/5', label: 'Average Rating' },
    { value: '500+', label: 'Happy Customers' },
    { value: '98%', label: 'Repeat Customers' },
    { value: '24hr', label: 'Response Time' }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

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
                Customer Testimonials
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Hear from our satisfied customers about their experience with 
                Subrina's painting and cleaning services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real customers who have experienced our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 mr-3" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{testimonial.date}</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Service:</strong> {testimonial.service}
                </div>
                
                <div className="text-sm text-gray-600">
                  <strong>Project:</strong> {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Summary */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Customers Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700">Consistently high-quality results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700">Professional and reliable service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700">Attention to detail and customer satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700">Flexible scheduling and competitive pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Leave Your Review
              </h3>
              <p className="text-gray-600 mb-6">
                We'd love to hear about your experience with our services. 
                Your feedback helps us improve and helps other customers make informed decisions.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://www.google.com/business/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  Review on Google
                </a>
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-900 transition-colors text-center"
                >
                  Review on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the quality and professionalism that has earned us hundreds of 5-star reviews.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;