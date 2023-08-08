"use client"

import React from 'react';

const Pricing = () => {
  const pricingOptions = [
    { title: 'Basic', price: '$10', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Premium', price: '$20', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { title: 'Pro', price: '$30', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Pricing</h2>
      <div className="flex justify-around">
        {pricingOptions.map((option, index) => (
          <PricingOption key={index} option={option} />
        ))}
      </div>
    </div>
  );
};

const PricingOption = ({ option }) => {
  return (
    <div className="border rounded-lg p-5">
      <h3 className="text-2xl font-bold text-center mb-5">{option.title}</h3>
      <p className="text-xl text-center mb-5">{option.price}</p>
      <ul>
        {option.features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pricing;
