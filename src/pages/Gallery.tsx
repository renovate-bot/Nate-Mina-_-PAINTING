import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'painting' | 'cleaning'>('all');

  const galleryImages = [
    {
      id: 1,
      category: 'painting',
      title: 'Living Room Interior Paint',
      description: 'Complete interior transformation with modern color scheme',
      before: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      after: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      featured: true
    },
    {
      id: 2,
      category: 'painting',
      title: 'Kitchen Cabinet Refinishing',
      description: 'Kitchen cabinet painting with premium finish',
      before: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      after: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      featured: false
    },
    {
      id: 3,
      category: 'painting',
      title: 'Exterior House Painting',
      description: 'Complete exterior makeover with weather-resistant paint',
      before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      featured: true
    },
    {
      id: 4,
      category: 'cleaning',
      title: 'Deep Kitchen Cleaning',
      description: 'Professional deep cleaning service results',
      before: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      after: 'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      featured: false
    },
    {
      id: 5,
      category: 'cleaning',
      title: 'Bathroom Deep Clean',
      description: 'Thorough bathroom sanitization and cleaning',
      before: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      after: 'https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      featured: false
    },
    {
      id: 6,
      category: 'cleaning',
      title: 'Whole House Cleaning',
      description: 'Complete home cleaning service transformation',
      before: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      after: 'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      featured: true
    }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = filteredImages.find(img => img.id === selectedImage);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div 
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Work Gallery
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                See the remarkable transformations we've achieved for our clients. 
                Before and after photos showcase our attention to detail and quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('painting')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                filter === 'painting'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Painting
            </button>
            <button
              onClick={() => setFilter('cleaning')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                filter === 'cleaning'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Cleaning
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <img 
                    src={image.before} 
                    alt={`${image.title} - Before`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={image.after} 
                    alt={`${image.title} - After`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
                {image.featured && (
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Featured Project
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={selectedImageData.before} 
                    alt={`${selectedImageData.title} - Before`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-medium">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={selectedImageData.after} 
                    alt={`${selectedImageData.title} - After`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-medium">
                    After
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImageData.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  selectedImageData.category === 'painting' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-teal-100 text-teal-800'
                }`}>
                  {selectedImageData.category === 'painting' ? 'Painting Service' : 'Cleaning Service'}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Photo Guidelines Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Photography Recommendations
            </h2>
            <p className="text-xl text-gray-600">
              To showcase your work effectively, consider these photo guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Painting Projects</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Before/after room transformations</li>
                <li>• Close-up shots of trim and detail work</li>
                <li>• Exterior before/after with different lighting</li>
                <li>• Color consultation and palette displays</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cleaning Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kitchen deep cleaning transformations</li>
                <li>• Bathroom sanitization results</li>
                <li>• Whole house cleaning before/after</li>
                <li>• Detail shots of appliances and fixtures</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Photo Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use natural lighting when possible</li>
                <li>• Take photos from the same angle</li>
                <li>• Include wide shots and detail shots</li>
                <li>• Ensure consistent image quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;