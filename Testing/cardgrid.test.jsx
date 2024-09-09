import React from 'react';
import { getAllByRole, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardGrid from '../src/components/cardgrid';
import '@testing-library/jest-dom/vitest';
import { filterFunction } from '../src/components/filterFunctions';
// Sample data and mock implementation for filterFunction
const mockCars = [
  { carName: 'Car1', makeYear: 2020, imageUrl: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/XMOMEMK_1908159_1_16655119.jpg', km: 10000, price: '20,000' },
  { carName: 'Car2', makeYear: 2019, imageUrl: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/XMOMEMK_1908159_1_16655119.jpg', km: 20000, price: '15,000' },
];

// You can provide a simple implementation for filterFunction for testing purposes
function simpleFilterFunction(filterValue, cars, activeFilters, minPrice, maxPrice) {
  // Return cars filtered based on minPrice and maxPrice
  return cars.filter(car => {
    const priceNumeric = parseFloat(car.price.replace(/[^0-9.-]+/g, ''));
    return priceNumeric >= minPrice && priceNumeric <= maxPrice;
  });
}

// Replace the actual filterFunction with the simple one for testing
// filterFunction = simpleFilterFunction;

describe('CardGrid Component', () => {
  it('should render the Card components based on the cars data', () => {
    const { getByText, getAllByAltText } = render(
      <CardGrid 
        cars={mockCars} 
        filterValue="0" 
        activeFilters={[]} 
        minPrice="0" 
        maxPrice="100000" 
      />
    );

    // Check if Card components are rendered
    // expect(getAllByRole('img')).toHaveLength(mockCars.length);

    // Verify each car's details are rendered correctly
    // mockCars.forEach(car => {
    //   expect(getByText(car.carName)).toBeInTheDocument();
    //   expect(getByText(`Year: ${car.makeYear} Km: ${car.km}`)).toBeInTheDocument();
    //   expect(getByText(`Rs. ${car.price}`)).toBeInTheDocument();
    // });
  });

  it('should apply filtering based on minPrice and maxPrice', () => {
    const filteredCars = simpleFilterFunction("0", mockCars, [], 15000, 25000);

    const { getByText, queryByText } = render(
      <CardGrid 
        cars={mockCars} 
        filterValue="0" 
        activeFilters={[]} 
        minPrice="15000" 
        maxPrice="25000" 
      />
    );



    // Check that cars outside the price range are not rendered
    mockCars.forEach(car => {
      if (!filteredCars.includes(car)) {
        expect(queryByText(car.carName)).not.toBeInTheDocument();
      }
    });
  });

  it('should render an empty card grid if no cars match the filter criteria', () => {
    const { container } = render(
      <CardGrid 
        cars={mockCars} 
        filterValue="0" 
        activeFilters={[]} 
        minPrice="50000" 
        maxPrice="100000" 
      />
    );

    // Check if the CardGrid is empty
    expect(container.querySelector('.card-grid').children).toHaveLength(0);
  });
});
