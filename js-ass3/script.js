// Array of objects operations

// creating empty array
var cars = [];

// Adding three objects to array
cars.push(car = {make : "Honda", model : "Camry", year : 2018},
          car = {make : "Honda", model : "Camry", year : 2018},
          car = {make : "Honda", model : "Camry", year : 2018}
         );

// removing first element in array
cars.splice(0,1);

// adding new car object 
cars.push(car = {make : "Honda", model : "Civic", year : 2020});

// updating 2nd items, model property to "Arccod"
cars[1].model="Arccod";

// printing the array
console.log(cars);