// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // <>
//     //   <div>
//     //     <a href="https://vitejs.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//     <h2>Hello</h2>
//   )
// }

// export default App

import React from 'react';
import CardGrid from './components/cardgrid';
import Filter from './components/filter';
import './App.css'; // Import your CSS for styling
import HeaderLine from './components/headerline';
import FilterWheel from './components/filterwheel';
import { useState, useEffect } from "react";
import { FilterContext } from './filtercontext';
// export var FilterContext = React.createContext(0);
const App = () => {
  const [cars, setCars] = useState([]);
  const [filterValue, setFilterValue] = useState("0"); // State to manage the dropdown value
  const [activeFilters, setActiveFilters] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/stocks?fuel=1+2&budget=0-7");
        // const response = await fetch("https://dummyjson.com/c/3151-8062-475b-8f20");
        console.log(response);
        // return;
        const data = await response.json();
        console.log(data.stocks);

        // Extract the required fields
        const extractedData = data.stocks.map((car) => ({
          carName: car.carName,
          imageUrl: car.imageUrl,
          makeYear: car.makeYear,
          km: car.km,
          kmNumeric: car.kmNumeric,
          price: car.price,
          priceNumeric: car.priceNumeric,
          fuel:car.fuel,
        }));

        setCars(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className='main'>
      <HeaderLine />
      <div className="app-layout">
        <div className="filter-section">
          <Filter activeFilters={activeFilters} setActiveFilters={setActiveFilters} 
          minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
        </div>
        <div className='subsection'>
          <div><FilterWheel filterValue={filterValue} setFilterValue={setFilterValue}/></div>
          {/* <div className="card-grid-section"> */}
            {/* <CardGrid /> */}
            <CardGrid cars={cars} filterValue={filterValue} activeFilters={activeFilters} setActiveFilters={setActiveFilters} minPrice={minPrice} maxPrice={maxPrice}/>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
