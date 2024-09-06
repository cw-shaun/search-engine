import React from 'react';
import './Filter.css'; // Import your CSS for styling

const Filter = () => {
  return (
    <div className="filter">
      <div className='filterheader'>
      <img src='/src/assets/filter.png' height={"15px"} width={"15px"} alt="Filter" />
      <h4 style={{margin:"0px"}}>Filters</h4>
      <p style={{margin:"0px",color:"blue", width:"100%", textAlign:"right"}}><u>Clear All</u></p>
      </div>
      <h5>Fuel</h5>
      <div className="filter-option">
        <input type="checkbox" id="option1" />
        <label htmlFor="option1">Petrol</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="option2" />
        <label htmlFor="option2">Diesel</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="option3" />
        <label htmlFor="option3">CNG</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="option3" />
        <label htmlFor="optio43">Electric</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="option3" />
        <label htmlFor="option5">Hybrid</label>
      </div>
    </div>
  );
};

export default Filter;
