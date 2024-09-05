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

const App = () => {
  return (
    <div className='main'>

      <HeaderLine />
      <div className="app-layout">
        <div className="filter-section">
          <Filter />
        </div>
        <div className='subsection'>
          <div><FilterWheel/></div>
          {/* <div className="card-grid-section"> */}
            <CardGrid />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
