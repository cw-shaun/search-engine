
export const fuel_types = {
    "Petrol": 0,
    "Diesel": 1,
    "CNG": 2
}

export const activeFilterswheel = {
    default: 0,
    ascending: 1,
    descending: 2
}

export const filters = {
    activeFilters: [],
    priceLow: 0,
    priceHigh: Infinity,
    sort: activeFilterswheel.default
}

const sortAscending = (cars) => {
    return [...cars].sort((a, b) => a.priceNumeric - b.priceNumeric);
};

const sortDescending = (cars) => {
    return [...cars].sort((a, b) => b.priceNumeric - a.priceNumeric);
};

export function filterFunction(activeFilterswheel,cars, activeFilters,priceLow,priceHigh){
var carsd = [];
switch (activeFilterswheel) {
    case "0":
        {
            carsd = [...cars];
            break;
        }
        case "1": {
            carsd = [...sortAscending(cars)];
            break;
        }
        case "2": {
            carsd = [...sortDescending(cars)];
            break;
        }
    }
    console.log("Here");
    console.log(carsd);
    carsd = carsd.filter(car => car.priceNumeric >= priceLow && car.priceNumeric <= priceHigh);
    if (activeFilters.length != 0) {
        carsd = carsd.filter(car => activeFilters.includes(car.fuel));
    }
    return carsd;

}