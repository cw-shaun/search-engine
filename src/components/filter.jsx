import React from 'react';
import './Filter.css'; // Import your CSS for styling

const Filter = () => {
  return (
    <div className="filter">
      <h3>Filter Options</h3>
      <div className="filter-option">
        <input type="checkbox" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="option3" />
        <label htmlFor="option3">Option 3</label>
      </div>
    </div>
  );
};

export default Filter;
