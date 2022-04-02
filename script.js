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
