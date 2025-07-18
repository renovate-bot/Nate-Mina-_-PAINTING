import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What areas do you serve?",
          answer: "We serve the greater metropolitan area including downtown districts, suburban communities, historic neighborhoods, new development areas, waterfront properties, and business districts. Contact us to confirm service availability in your specific location."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed, bonded, and insured. All our staff members are background-checked and trained professionals. We carry comprehensive liability insurance for your peace of mind."
        },
        {
          question: "How do I get a quote?",
          answer: "You can get a quote by calling us at (555) 123-4567, filling out our online contact form, using our service calculator, or booking a free in-home consultation. We provide detailed written estimates for all services."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we offer emergency cleaning services for urgent situations with same-day availability. Emergency services include a 50% surcharge and are subject to availability."
        }
      ]
    },
    {
      category: "Cleaning Services",
      questions: [
        {
          question: "What's included in regular cleaning?",
          answer: "Regular cleaning includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathrooms (toilets, sinks, tubs/showers, mirrors), kitchen cleaning (counters, sink, stovetop, outside of appliances), and trash removal."
        },
        {
          question: "What's the difference between regular and deep cleaning?",
          answer: "Deep cleaning is more comprehensive and includes everything in regular cleaning plus: inside appliances (oven, refrigerator), baseboards, window sills, light fixtures, detailed bathroom scrubbing, and areas typically not covered in regular maintenance."
        },
        {
          question: "Do I need to be home during cleaning?",
          answer: "No, you don't need to be home. Many clients provide us with access instructions or a key. We're fully insured and bonded, and all staff are background-checked for your security."
        },
        {
          question: "What cleaning products do you use?",
          answer: "We use professional-grade, eco-friendly cleaning products that are safe for children and pets. If you have specific product preferences or allergies, we can accommodate special requests."
        },
        {
          question: "How long does cleaning take?",
          answer: "Cleaning time varies by property size and service type. Regular cleaning typically takes 1-3 hours, while deep cleaning can take 3-6 hours. We'll provide an estimated timeframe with your quote."
        }
      ]
    },
    {
      category: "Painting Services",
      questions: [
        {
          question: "Do you provide free color consultations?",
          answer: "Yes, we offer professional color consultations including color matching, design advice, sample testing, and trend analysis. This service helps ensure you choose the perfect colors for your space."
        },
        {
          question: "What type of paint do you use?",
          answer: "We use premium quality paints from trusted brands. For interiors, we typically use low-VOC or zero-VOC paints. For exteriors, we use weather-resistant paints designed for your local climate conditions."
        },
        {
          question: "How long does paint last?",
          answer: "Interior paint typically lasts 5-10 years depending on traffic and conditions. Exterior paint lasts 7-15 years depending on weather exposure, surface preparation, and paint quality. We provide warranties on our work."
        },
        {
          question: "Do you move furniture?",
          answer: "Yes, we carefully move and protect furniture as needed. Large or valuable items may require special arrangements. We use protective coverings for all furniture and flooring during painting."
        },
        {
          question: "Can you paint in winter?",
          answer: "Interior painting can be done year-round. Exterior painting depends on weather conditions - we need temperatures above 50°F and dry conditions. We'll advise on the best timing for your project."
        }
      ]
    },
    {
      category: "Scheduling & Payment",
      questions: [
        {
          question: "How far in advance should I book?",
          answer: "For regular cleaning, we recommend booking 1-2 weeks in advance. For painting projects, 2-4 weeks advance notice is ideal. Emergency services may be available with same-day or next-day scheduling."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, check, and all major credit cards. Payment is typically due upon completion of service. For larger painting projects, we may require a deposit with the balance due upon completion."
        },
        {
          question: "What if I need to reschedule?",
          answer: "We understand schedules change. Please give us at least 24 hours notice for rescheduling to avoid any fees. Same-day cancellations may incur a service charge."
        },
        {
          question: "Do you offer recurring service discounts?",
          answer: "Yes, we offer discounts for recurring cleaning services. Weekly service receives the best rates, followed by bi-weekly and monthly service. Long-term contracts may qualify for additional savings."
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-6">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category.category}
            </h3>
            
            <div className="space-y-3">
              {category.questions.map((item, questionIndex) => {
                const globalIndex = categoryIndex * 100 + questionIndex;
                const isOpen = openItems.includes(globalIndex);
                
                return (
                  <div key={questionIndex} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-4 pb-3">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Our friendly team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+15551234567"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            Call (555) 123-4567
          </a>
          <a
            href="/contact"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors text-center"
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;