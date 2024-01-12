// 'use strict';

// const bookings = [];

// const createBooking  = function(flightNum, numPassengers = 1, price = 190 * numPassengers) {

//     //ES5 
//     // numPassengers = numPassengers || 1;
//     // price =  price || 299;


//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', 5, 204);


// const flight = 'LS123';
// const brandy = {
//     name : 'Brandy Kundenga',
//     passport: 1234567890
// }

// const  checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 1234567890) {
//         alert('Checked In');
//     } else {
//         alert('Wrong Passport');
//     }
// };

// checkIn(flight, brandy)
// console.log(flight);
// console.log(brandy);

const oneWorld = function(str) {
    return str.replace(/ /g, '').toLowerCase(); 
};

const upperFirstWorkd = function(str) {
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn) {
    console.log(`Orgial string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWorkd);
transformer("Javascript is the best!", oneWorld);