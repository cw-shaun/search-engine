import React, { useContext } from 'react'
import './filterwheel.css'


function FilterWheel({filterValue,setFilterValue}) {
    const handleChange = (event) => {
        setFilterValue(event.target.value); // Update the parent state when the dropdown value changes
      };
    return (
        <div className='filterwheel'>
            <label >Sort By:</label>
            <select value={filterValue} id="filterdropdown" name="cars" onChange={handleChange}>
                <option value="0">Best Match</option>
                <option value="1">Price - Low to High</option>
                <option value="2">Price - High to Low</option>
            </select>
        </div>
    )
}

export default FilterWheel