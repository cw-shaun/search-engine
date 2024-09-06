import React from 'react';
import './Filter.css'; // Import your CSS for styling


const Filter = ({activeFilters,setActiveFilters}) => {
  const clearFilters = () => {
    setActiveFilters([]); 
  };
  const onFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the checkbox value to the active checkboxes
      setActiveFilters((prev) => [...prev, value]);
    } else {
      // Remove the checkbox value from the active checkboxes
      setActiveFilters((prev) => prev.filter((checkbox) => checkbox !== value));
    }
  };
  return (
    <div className="filter">
      <div className='filterheader'>
      <img src='/src/assets/filter.png' height={"15px"} width={"15px"} alt="Filter" />
      <h4 style={{margin:"0px"}}>Filters</h4>
      <p style={{margin:"0px",color:"blue", width:"100%", textAlign:"right"}}><u style={{cursor:'pointer'}} onClick={clearFilters}>Clear All</u></p>
      </div>
      <h5>Fuel</h5>
      <div className="filter-option">
        <input type="checkbox" value={"Petrol"} checked={activeFilters.includes("Petrol")}
 id="option1" onChange={onFilterChange} />
        <label htmlFor="option1">Petrol</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" value={"Diesel"} checked={activeFilters.includes("Diesel")} id="option2" onChange={onFilterChange}/>
        <label htmlFor="option2">Diesel</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" value={"CNG"} checked={activeFilters.includes("CNG")} id="option3" onChange={onFilterChange}/>
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
