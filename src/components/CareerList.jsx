import React from 'react';
import CareerItem from './CareerItem'; // Import the JSX CareerItem

const CareerList = ({ careers }) => {
  if (!careers || careers.length === 0) {
    return <p>No career information available.</p>; // Handle empty list
  }

  return (
    <div className="flex flex-col gap-6">
      {careers.map((career, index) => (
        <CareerItem
          // Using company and index for key, ensure company names are unique enough or use a slug/id if available
          key={`${career.company}-${index}`}
          career={career}
        />
      ))}
    </div>
  );
};

export default CareerList; // Use default export