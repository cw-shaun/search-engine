import React from 'react'

const sortAscending = (cars) => {
    const sorted = [...cars].sort((a, b) => a.priceNumeric - b.priceNumeric);
    return sorted;
  };

  const sortDescending = (cars) => {
    const sorted = [...cars].sort((a, b) => b.priceNumeric - a.priceNumeric);
    return sorted
  };

export function filterfunctions(filterneeded,cars) {
    if(filterneeded==1){
        return sortAscending(cars)
    }
    else if(filterneed==2){
        return sortDescending(cars)
    }
}
