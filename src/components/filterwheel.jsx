import React from 'react'
import './filterwheel.css'

function FilterWheel() {
    return (
        <div className='filterwheel'>
            <label >Sort By:</label>
            <select name="cars" id="cars">
                <option value="volvo">Best Match</option>
                <option value="saab">Price - Low to High</option>
                <option value="mercedes">Price - High to Low</option>
            </select>
        </div>
    )
}

export default FilterWheel