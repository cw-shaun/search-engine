import React from 'react';
import Card from './card';
import './cardgrid.css'; 

const CardGrid = () => {
  return (
    <div className="card-grid">
      <Card
        title="Beautiful Sunset"
        content="This is a beautiful sunset over the mountains."
        imageUrl="https://example.com/sunset.jpg"
      />
      <Card
        title="Mountain Landscape"
        content="A breathtaking view of the mountains during the day."
        imageUrl="https://example.com/mountain.jpg"
      />
      <Card
        title="City at Night"
        content="The city lights shining brightly during the night."
        imageUrl="https://example.com/city.jpg"
      />
      <Card
        title="Ocean Waves"
        content="The waves crashing against the shore on a sunny day."
        imageUrl="https://example.com/ocean.jpg"
      />
    </div>
  );
};

export default CardGrid;
