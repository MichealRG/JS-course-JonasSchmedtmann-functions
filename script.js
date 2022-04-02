'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //es5 doing defualt value
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH1234';
const jonas = {
  name: 'Jonas Schmiddtmean',
  passport: 34567834342,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999';
  passanger.name = `Mr. ${passanger.name}`;

  if (passanger.passport === 34567834342) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, jonas); //flight primitve - copy, jonas ref object - ref to object on heap
console.log(flight);
console.log(jonas);

const newPassanger = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassanger(jonas);
checkIn(flight, jonas);
