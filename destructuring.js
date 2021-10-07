/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
// let ages =[30,26,27]
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]
// let [john,mary,joe] = ages
// console.log(john,mary,joe)
// Destructuring objects
let jobs = {
    mike: 'developer',
    jill: 'designer',
    alicia: 'accountant'
}
let {mike,jill, alicia} = jobs

console.log(mike,jill,alicia)
// Destructuring subsets
let languages =['english', 'french','spanish', 'german', 'japanese']
let [johnNative,johnSecondary] = languages
let [,samuelNative, ,samuelSecondary] = languages
console.log(johnNative,johnSecondary)
console.log(samuelNative,samuelSecondary)
// destructuring subsets of Object
let languages2 = {
    firstLnaguage: 'english',
    secondLnaguage: 'french',
    thirdLnaguage: 'german',
    fourthLnaguage: 'japanese',
}

let {firstLnaguage,fourthLnaguage} = languages2
console.log(firstLnaguage,fourthLnaguage)

// Using rest parameter syntax
let fruits = ['apple','orange','banana','peach','cherry'];
let [favorite,secondFavorite,...others] = fruits
console.log(favorite)
console.log(secondFavorite)
console.log(others)

let favoriteFoods = {
    brian:'pizza',
    anna:'pasta',
    sarah:'vegetarian',
    andrea:'steak'
}

let{brian,anna,...rest} = favoriteFoods;
console.log(brian)
console.log(anna)
console.log(rest)

// challange destructuring

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr,student)=>{
    for(let item of arr){
        if(item.name === student){
            return item.subjects
        }
    }
}
let subjects = makeList(students,'John')
// console.log(subjects)
let [first,second,...rest] = subjects
console.log(first,second,rest)