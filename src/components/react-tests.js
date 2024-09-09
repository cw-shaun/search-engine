import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import './functions.js';

describe('handleChange', () => {
  it('should set the correct value when a checkbox is checked', () => {
    // Mock the setFilterValue function
    const setFilterValue = jest.fn();
    
    // Create a mock event object for a checked checkbox with value '0'
    const eventChecked = {
      target: { value: '0', checked: true }
    };

    // Create a mock event object for an unchecked checkbox
    const eventUnchecked = {
      target: { value: '0', checked: false }
    };


    // Call the handleChange function with the mock checked event
    handleChange(eventChecked);
    expect(setFilterValue).toHaveBeenCalledWith('0');

    // Call the handleChange function with the mock unchecked event
    handleChange(eventUnchecked);
    
    // Assert that setFilterValue was called with an empty string
    expect(setFilterValue).toHaveBeenCalledWith('');
  });
});
