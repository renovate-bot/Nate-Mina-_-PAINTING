import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Users, Heart, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every project receives our full attention and expertise.'
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: 'Reliability',
      description: 'On-time service and consistent results you can depend on, project after project.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Passion',
      description: 'We take pride in transforming spaces and making homes beautiful and clean.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Customers' },
    { number: '10+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const certifications = [
    'Licensed Painting Contractor',
    'Insured & Bonded',
    'Eco-Friendly Certified',
    'Background Checked Staff',
    'Better Business Bureau A+ Rating'
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div 
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-85"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Subrina's Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Dedicated to transforming homes with professional painting and cleaning services. 
                Quality, reliability, and customer satisfaction since 2014.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Subrina
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With over 10 years of experience in the home services industry, Subrina founded 
                this business with a simple mission: to provide homeowners with exceptional 
                painting and cleaning services they can trust.
              </p>
              <p>
                What started as a passion for helping neighbors maintain beautiful homes has 
                grown into a full-service company serving the greater metropolitan area. 
                Subrina's attention to detail and commitment to quality has earned the trust 
                of hundreds of satisfied customers.
              </p>
              <p>
                Today, Subrina's Services combines traditional craftsmanship with modern 
                techniques and eco-friendly products to deliver outstanding results for 
                every project, whether it's a fresh coat of paint or a thorough home cleaning.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
              alt="Professional service team"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-600">
            Numbers that speak to our commitment and success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 text-lg">{achievement.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Licensed & Certified
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We maintain all necessary licenses, certifications, and insurance to provide 
                you with peace of mind and professional service.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                alt="Professional certification"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              "To provide exceptional painting and cleaning services that exceed customer expectations, 
              while maintaining the highest standards of quality, reliability, and professionalism. 
              We believe every home deserves to be beautiful, clean, and well-maintained."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference that professional, reliable service makes. 
            Contact us today to discuss your project needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/gallery"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;