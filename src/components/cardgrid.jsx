import React from 'react';
import Card from './card';
import './cardgrid.css';

const sortAscending = (cars) => {
  const sorted = [...cars].sort((a, b) => a.priceNumeric - b.priceNumeric);
  // setSortedCars(sorted);
  return sorted;
};

const sortDescending = (cars) => {
  const sorted = [...cars].sort((a, b) => b.priceNumeric - a.priceNumeric);
  // setSortedCars(sorted);
  return sorted;
};
const fuelFilter = (carArray, activeFilters) => {
  return carArray.filter(car => activeFilters.includes(car.fuel));
  // return carArray.filter(function (el) {return el.fuel})
};


const CardGrid = ({ cars, filterValue, activeFilters, minPrice, maxPrice }) => {
  var carsd = [];
  console.log(filterValue);
  console.log(activeFilters);

  switch (filterValue) {
    case "0":
      {
        carsd = [...cars];
        break;
      }
    case "1": {
      carsd = [...sortAscending(cars)];
      break;
    }
    case "2": {
      carsd = [...sortDescending(cars)];
      break;
    }
  }
  console.log(carsd);
  const miny = parseFloat(minPrice) || 0;
  const maxy = parseFloat(maxPrice) || Infinity;

  carsd = carsd.filter(car => car.priceNumeric >= miny && car.priceNumeric <= maxy);

  return (
    <div className="card-grid">
      {
        carsd.map((carsd, index) => (
          <Card key={index}
            title={carsd.carName}
            year={carsd.makeYear}
            imageUrl={carsd.imageUrl}
            km={carsd.km}
            price={carsd.price}
          />
          // <Card
          //   title="Mountain Landscape"
          //   content="A breathtaking view of the mountains during the day."
          //   imageUrl="https://example.com/mountain.jpg"
          // />
          // <Card
          //   title="City at Night"
          //   content="The city lights shining brightly during the night."
          //   imageUrl="https://example.com/city.jpg"
          // />
          // <Card
          //   title="Ocean Waves"
          //   content="The waves crashing against the shore on a sunny day."
          //   imageUrl="https://example.com/ocean.jpg"
          // />
        ))}
    </div>
  );
};

export default CardGrid;
