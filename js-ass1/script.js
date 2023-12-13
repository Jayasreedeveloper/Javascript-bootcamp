// Array operations

// creating empty array
var fruits = []

//adding elements 
fruits.push("apple","banana","orange");

// deleting first item
fruits.splice(0,1);

// adding item at the last
fruits.push("grapes");

// replacing 2nd element to "pear"
fruits.splice(1,1,"pear");

// printing the array
console.log("After updating:" ,fruits)