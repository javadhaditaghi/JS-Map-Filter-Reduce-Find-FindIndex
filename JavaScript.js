var numbers = [2, 46, 1, 38, 4];


//Map -Create a new array by doing something with each item in an array.

const mappedNums = numbers.map((number) => {
    return number *= -1; //Returning the Negative form of each number
})

console.log(mappedNums)


//Filter - Create a new array by keeping the items that return true.


const filteredNums = numbers.filter((numberF) => {
    return numberF % 2 == 0;  //Returning Only the Even Numbers 
})

console.log(filteredNums)

const filteredNum = numbers.filter((numberF) => {
    return numberF % 2 != 0;  //Returning the Odd numbers
})

console.log(filteredNum)



//Reduce - Accumulate a value by doing something to each item in an array.

const sum = numbers.reduce((accumulator, item) => {
    return accumulator + item //Calculating the sum of the numbers
})

console.log(sum)




//Find - find the first item that matches from an array.

const first = numbers.find(number => {
    return number * number == number  //identity property of multiplication
})

console.log(first)


//FindIndex - find the index of the first item that matches.

const firstIndex = numbers.findIndex(number => {
    return number >= 30 && number <= 60 //Finding the first index of the numbers between 30 and 60 
})

console.log(firstIndex)