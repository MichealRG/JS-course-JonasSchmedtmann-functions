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

//functions with callbacks
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
//higher order function
const transformed = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log('Transformed string: ' + fn(str));
  console.log(`Transformed by: ${fn.name}`);
};

transformed('JavaScript is the best!', upperFirstWord); //callback function
transformed('JavaScript is the best!', oneWord); //callback function

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

//funciton return another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steve');
greet('Hello')('Jonas');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Elo')('Miguel');

//call method
const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book('239', 'Jonas Schmitt');
lufthansa.book(635, 'Micheal Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book(23, 'Sarah Williams'); //error
book.call(eurowings, 23, 'Sarah Conor');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Line',
  iatacode: 'LX',
  bookings: [],
};
book.call(swiss, 99, 'Mary Cooper');

//apply method
const flightData = [485, 'Gorge Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
