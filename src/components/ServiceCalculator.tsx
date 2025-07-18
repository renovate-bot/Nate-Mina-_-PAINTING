import React, { useState, useEffect } from 'react';
import { Calculator, Home, Paintbrush, Sparkles, Info } from 'lucide-react';

const ServiceCalculator = () => {
  const [serviceType, setServiceType] = useState<'cleaning' | 'painting'>('cleaning');
  const [formData, setFormData] = useState({
    // Common fields
    squareFootage: '',
    rooms: '',
    bathrooms: '',
    
    // Cleaning specific
    cleaningType: 'regular',
    frequency: 'weekly',
    pets: false,
    extraServices: [] as string[],
    
    // Painting specific
    paintingType: 'interior',
    ceilings: false,
    trim: false,
    doors: '',
    windows: '',
    condition: 'good'
  });

  const [estimate, setEstimate] = useState<{
    basePrice: number;
    total: number;
    breakdown: Array<{item: string; price: number}>;
  } | null>(null);

  const cleaningRates = {
    regular: { base: 0.08, min: 80 },
    deep: { base: 0.15, min: 150 },
    moveout: { base: 0.12, min: 200 }
  };

  const paintingRates = {
    interior: { base: 2.5, min: 300 },
    exterior: { base: 3.0, min: 500 },
    cabinet: { base: 15, min: 400 }
  };

  const frequencyMultipliers = {
    weekly: 1.0,
    biweekly: 1.1,
    monthly: 1.3,
    onetime: 1.5
  };

  const extraCleaningServices = [
    { name: 'Inside Oven', price: 25 },
    { name: 'Inside Refrigerator', price: 20 },
    { name: 'Inside Windows', price: 30 },
    { name: 'Garage Cleaning', price: 40 },
    { name: 'Basement Cleaning', price: 35 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleExtraServiceChange = (serviceName: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      extraServices: checked 
        ? [...prev.extraServices, serviceName]
        : prev.extraServices.filter(s => s !== serviceName)
    }));
  };

  const calculateEstimate = () => {
    const sqft = parseInt(formData.squareFootage) || 0;
    const rooms = parseInt(formData.rooms) || 0;
    const bathrooms = parseInt(formData.bathrooms) || 0;

    if (sqft === 0) return;

    let basePrice = 0;
    let breakdown: Array<{item: string; price: number}> = [];

    if (serviceType === 'cleaning') {
      const rate = cleaningRates[formData.cleaningType as keyof typeof cleaningRates];
      basePrice = Math.max(sqft * rate.base, rate.min);
      
      const frequencyMultiplier = frequencyMultipliers[formData.frequency as keyof typeof frequencyMultipliers];
      basePrice *= frequencyMultiplier;

      breakdown.push({
        item: `${formData.cleaningType.charAt(0).toUpperCase() + formData.cleaningType.slice(1)} cleaning (${sqft} sq ft)`,
        price: basePrice
      });

      // Add bathroom surcharge
      if (bathrooms > 2) {
        const bathroomSurcharge = (bathrooms - 2) * 15;
        basePrice += bathroomSurcharge;
        breakdown.push({
          item: `Additional bathrooms (${bathrooms - 2})`,
          price: bathroomSurcharge
        });
      }

      // Add pet surcharge
      if (formData.pets) {
        const petSurcharge = 20;
        basePrice += petSurcharge;
        breakdown.push({
          item: 'Pet cleaning surcharge',
          price: petSurcharge
        });
      }

      // Add extra services
      formData.extraServices.forEach(serviceName => {
        const service = extraCleaningServices.find(s => s.name === serviceName);
        if (service) {
          basePrice += service.price;
          breakdown.push({
            item: service.name,
            price: service.price
          });
        }
      });

    } else {
      // Painting calculation
      const rate = paintingRates[formData.paintingType as keyof typeof paintingRates];
      basePrice = Math.max(sqft * rate.base, rate.min);

      breakdown.push({
        item: `${formData.paintingType.charAt(0).toUpperCase() + formData.paintingType.slice(1)} painting (${sqft} sq ft)`,
        price: basePrice
      });

      // Add ceiling painting
      if (formData.ceilings) {
        const ceilingPrice = sqft * 1.5;
        basePrice += ceilingPrice;
        breakdown.push({
          item: 'Ceiling painting',
          price: ceilingPrice
        });
      }

      // Add trim painting
      if (formData.trim) {
        const trimPrice = rooms * 50;
        basePrice += trimPrice;
        breakdown.push({
          item: `Trim painting (${rooms} rooms)`,
          price: trimPrice
        });
      }

      // Add doors
      const doors = parseInt(formData.doors) || 0;
      if (doors > 0) {
        const doorPrice = doors * 75;
        basePrice += doorPrice;
        breakdown.push({
          item: `Door painting (${doors} doors)`,
          price: doorPrice
        });
      }

      // Add windows
      const windows = parseInt(formData.windows) || 0;
      if (windows > 0) {
        const windowPrice = windows * 40;
        basePrice += windowPrice;
        breakdown.push({
          item: `Window trim (${windows} windows)`,
          price: windowPrice
        });
      }

      // Condition adjustment
      if (formData.condition === 'poor') {
        const conditionSurcharge = basePrice * 0.3;
        basePrice += conditionSurcharge;
        breakdown.push({
          item: 'Surface preparation (poor condition)',
          price: conditionSurcharge
        });
      } else if (formData.condition === 'fair') {
        const conditionSurcharge = basePrice * 0.15;
        basePrice += conditionSurcharge;
        breakdown.push({
          item: 'Surface preparation (fair condition)',
          price: conditionSurcharge
        });
      }
    }

    setEstimate({
      basePrice: breakdown[0]?.price || 0,
      total: basePrice,
      breakdown
    });
  };

  useEffect(() => {
    calculateEstimate();
  }, [formData, serviceType]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Service Calculator</h2>
      </div>

      {/* Service Type Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
        <button
          onClick={() => setServiceType('cleaning')}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors ${
            serviceType === 'cleaning'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Sparkles className="h-5 w-5 mr-2" />
          Cleaning
        </button>
        <button
          onClick={() => setServiceType('painting')}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors ${
            serviceType === 'painting'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Paintbrush className="h-5 w-5 mr-2" />
          Painting
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Property Details
          </h3>

          {/* Common Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Square Footage *
              </label>
              <input
                type="number"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleInputChange}
                placeholder="e.g., 1500"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Rooms
              </label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleInputChange}
                placeholder="e.g., 3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Bathrooms
            </label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              placeholder="e.g., 2"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Cleaning Specific Fields */}
          {serviceType === 'cleaning' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cleaning Type
                </label>
                <select
                  name="cleaningType"
                  value={formData.cleaningType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="regular">Regular Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="moveout">Move-out Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Frequency
                </label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="onetime">One-time</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="pets"
                  checked={formData.pets}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Pets in home (+$20)
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Extra Services
                </label>
                <div className="space-y-2">
                  {extraCleaningServices.map((service) => (
                    <div key={service.name} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.extraServices.includes(service.name)}
                        onChange={(e) => handleExtraServiceChange(service.name, e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        {service.name} (+${service.price})
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Painting Specific Fields */}
          {serviceType === 'painting' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Painting Type
                </label>
                <select
                  name="paintingType"
                  value={formData.paintingType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="cabinet">Cabinet Painting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surface Condition
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="good">Good (minimal prep)</option>
                  <option value="fair">Fair (moderate prep +15%)</option>
                  <option value="poor">Poor (extensive prep +30%)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Doors
                  </label>
                  <input
                    type="number"
                    name="doors"
                    value={formData.doors}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Windows
                  </label>
                  <input
                    type="number"
                    name="windows"
                    value={formData.windows}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="ceilings"
                    checked={formData.ceilings}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Include ceiling painting
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="trim"
                    checked={formData.trim}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Include trim and molding
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Estimate Display */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Estimated Cost
          </h3>

          {estimate ? (
            <div className="space-y-4">
              <div className="space-y-2">
                {estimate.breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.item}</span>
                    <span className="font-medium">${item.price.toFixed(0)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total Estimate:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${estimate.total.toFixed(0)}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">This is an estimate only.</p>
                    <p>Final pricing may vary based on specific conditions, accessibility, and additional requirements discovered during the on-site consultation.</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Get Accurate Quote
              </button>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <Home className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Enter your property details to see an estimate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCalculator;