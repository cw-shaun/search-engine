import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Filter from '../src/components/filter';
import '@testing-library/jest-dom/vitest';

describe('Filter Component', () => {
  let setActiveFilters, setMinPrice, setMaxPrice;

  beforeEach(() => {
    setActiveFilters = vi.fn();
    setMinPrice = vi.fn();
    setMaxPrice = vi.fn();
  });

  it('should render the filter component correctly', () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <Filter
        activeFilters={[]}
        setActiveFilters={setActiveFilters}
        minPrice=""
        setMinPrice={setMinPrice}
        maxPrice=""
        setMaxPrice={setMaxPrice}
      />
    );
    console.log(getByText);

    // Check if all elements are rendered correctly
    expect(getByText('Price Filter')).toBeInTheDocument();
    expect(getByText('Fuel')).toBeInTheDocument();
    expect(getByPlaceholderText('Min')).toBeInTheDocument();
    expect(getByPlaceholderText('Max')).toBeInTheDocument();
    expect(getByLabelText('Petrol')).toBeInTheDocument();
    expect(getByLabelText('Diesel')).toBeInTheDocument();
    expect(getByLabelText('CNG')).toBeInTheDocument();
  });

  it('should update active filters when checkboxes are clicked', () => {
    const { getByLabelText } = render(
      <Filter
        activeFilters={[]}
        setActiveFilters={setActiveFilters}
        minPrice=""
        setMinPrice={setMinPrice}
        maxPrice=""
        setMaxPrice={setMaxPrice}
      />
    );

    // Check the "Petrol" checkbox
    const petrolCheckbox = getByLabelText('Petrol');
    fireEvent.click(petrolCheckbox);
    expect(setActiveFilters).toHaveBeenCalled();

    // Uncheck the "Petrol" checkbox
    fireEvent.click(petrolCheckbox);
    expect(setActiveFilters).toHaveBeenCalled();
  });

  it('should update min and max price when input fields are changed', () => {
    const { getByPlaceholderText } = render(
      <Filter
        activeFilters={[]}
        setActiveFilters={setActiveFilters}
        minPrice=""
        setMinPrice={setMinPrice}
        maxPrice=""
        setMaxPrice={setMaxPrice}
      />
    );

    // Update min price
    const minPriceInput = getByPlaceholderText('Min');
    fireEvent.change(minPriceInput, { target: { value: '10000' } });
    expect(setMinPrice).toHaveBeenCalledWith('10000');

    // Update max price
    const maxPriceInput = getByPlaceholderText('Max');
    fireEvent.change(maxPriceInput, { target: { value: '50000' } });
    expect(setMaxPrice).toHaveBeenCalledWith('50000');
  });

  it('should clear all filters when "Clear All" is clicked', () => {
    const { getByText } = render(
      <Filter
        activeFilters={['Petrol', 'Diesel']}
        setActiveFilters={setActiveFilters}
        minPrice="10000"
        setMinPrice={setMinPrice}
        maxPrice="50000"
        setMaxPrice={setMaxPrice}
      />
    );

    // Click on "Clear All"
    const clearAllButton = getByText('Clear All');
    fireEvent.click(clearAllButton);

    // Check if all filters are cleared
    expect(setActiveFilters).toHaveBeenCalledWith([]);
    expect(setMinPrice).toHaveBeenCalledWith('');
    expect(setMaxPrice).toHaveBeenCalledWith('');
  });
});
