const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];{

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
   return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }
  selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  selectDifferentDrivers(drivers,returnLastTwoDrivers );

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);

const tripleFare = function(fare) {
  return fare * 3;
};

const fareTripler = createFareMultiplier(3);
}