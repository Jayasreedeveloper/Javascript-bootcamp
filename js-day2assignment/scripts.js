// ass 1
function signofnumber(num) {
    if (num < 0){
        console.log(num +" is negative");
    }
    else if(num > 0){
        console.log(num + " is positive");
    }
    else{
        console.log(num+" is zero");
    }
}
signofnumber(0);
signofnumber(10);
signofnumber(-9);

// ass 2
function factorial(num){
    if(num > 0){
        let fact = 1
        for( let i;i<num;i++){
            fact *= i;
        }
        console.log("The factorial of "+num+" is ",fact);
    }
    else{
        console.log("Please give the positive number!");
    };
}

factorial(0);
factorial(10);
factorial(-7);

// ass 3
function largerone(n1,n2){
    if(n1<n2){
        console.log(n2+" is greater");
    }
    else if(n2<n1){
        console.log(n1+" is greater");
    }
    else{
        console.log(n1+" and "+n2+" are same");
    }
}
largerone(3,33);
largerone(99,99);
largerone(90,12);

// ass 4
function ispallindrome(str) {
    const string = str.toLowerCase();
    const reversestr = string.split('').reverse().join('');
    if (string == reversestr) {
        console.log(str + " is pallindrome");
    }
    else {
        console.log(str + "is not pallindrome");
    }
}
ispallindrome("malayalam");
ispallindrome("english")

// ass 5
function generatePrimesUpToN(n) {
    if (n < 2) {
        console.log("There are no prime numbers up to " + n);
        return;
    }
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(`Prime numbers up to ${n}: ${primes.join(', ')}`);
}
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
generatePrimesUpToN(20);

// ass 6
function calculator(n1, n2, op) {
    if (op == '+') {
        console.log("The addition : ", n1 + n2);
    }
    else if (op == '-') {
        console.log("Subtraction: ", n1 - n2);
    }
    else if (op == '*') {
        console.log("Multiplication: ", n1 * n2);
    }
    else if (op == '/') {
        console.log("Division: ", n1 / n2);
    }
    else {
        console.log("Enter correct operator(+,-,*,/) in string!!");
    }
}
calculator(10, 5, '+');
calculator(10, 5, '-');
calculator(10, 5, '*');
calculator(10, 5, '/');
calculator(10, 5, '@');

// ass 7
function vowelcount(str) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelcount = 0;
    for (let i of str.toLowerCase()) {
        if (vowels.includes(i)) {
            vowelcount++;
        }
    }
    console.log("The number of vowels is " + vowelcount)
}
vowelcount("Javascript bootcamp");
vowelcount("Jayasree");

// ass 8
function isPerfectNumber(number) {
    if (number <= 0) {
        console.log("Please provide a positive integer.");
        return false;
    }
    let sumOfDivisors = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
            if (i !== number / i && i !== 1) {
                sumOfDivisors += number / i;
            }
        }
    }
    if(sumOfDivisors == number){
        console.log(number+" is a perfect number");
    }
    else{
        console.log(number+" is not a perfect number");

    }
}
isPerfectNumber(28);
isPerfectNumber(99);

// ass 9
function fibonacciSeriesUpToN(n) {
    if (n <= 0) {
      console.log("Please provide a positive integer.");
      return;
    }
    let fib = [0, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    console.log("Fibonacci series upto "+n+" is "+fib.join(', '));
  }
fibonacciSeriesUpToN(77);

// ass 10
function multiplicationTable(number) {
    if (number <= 0) {
      console.log("Please provide a positive integer.");
      return;
    }
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(number+"x"+i+ "="+number * i);
    }
  }
multiplicationTable(7);
  