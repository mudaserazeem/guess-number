// const person = {
//     name: 'mudaser',
//     age: 21,
//     city: 'Taunsa',
//     college: 'punjab group of college',
//     Number: '03001565933',
// }

// // obect inside object

// const students = [
//     {
//         name: 'mudaser',
//         age: 21,
//         city: 'Taunsa',
//         college: 'punjab group of college',
//         Number: '03001565933',
//     }
//     ,
//     {
//         name: 'ali',
//         age: 21,
//         city: 'Taunsa',
//         college: 'punjab group of college',
//         Number: '03001565933',
//     }
// ]





// //  what is key value and property

// //  key is the name of a property

// // property is the combination of key and value

// //  for example : name : 'mudaser'

// // name is a key and 'mudaser' is a value





// // Array VS object

// // Array is a collection of value

// // let array = ['mudaser', 'Pakistan', 'Taunsa']

// // Object is a collection of key value pairs

// // let students = {
// //     name: 'mudaser',
// //     country: 'Pakistan',
// //     city: 'Taunsa'
// // }

// // Objecct can represent a single entity 
// // for Example : person , Post , School

// //  But

// //  array can support multipal entities

// // let person =[{}];
// // let Posts =[{}];
// // let Schools =[{}];




// // WHo to access object properties

// // we can access Object properties by two method

// // Dot Notation
// // Breaket Notaion

// let friends = {

//     firstName: 'kamran',
//     lastName: 'azeem',
//     // function object method 
//     getfullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },

//     city: 'Taunsa',
//     age: 21,

// }

// // how to update
// friends.firstName = 'Mudaser';
// console.log(friends.firstName)

// // how to get
// console.log(friends.firstName);

// // how to delete
// // delete friends.firstName;
// // console.log(friends.firstName);

// // function object method call
// console.log(friends.getfullName());



// document.body.innerHTML = friends.getfullName()


// //  this : keyword 

// // this keywrod is  point to an object , where is the key word use ?

// const sum = function () {
//     return this.number1 + this.number2
// }

// const marks = {
//     number1: 30,
//     number2: 20,
//     sum: sum
// }
// console.log(marks.sum())




// // Object method with arrow function and and function expression 


// // In funtion expression

// // this method only work in function expression

// const object = {

//     method: function () {
//         console.log(this)
//     }
// }

// // In Arrow funtion 

// // this method dont work  in function expression

// const object2 = {

//     king: 'ali',

//     // method: () => {
//     //     console.log(this)
//     // }
// }


// //  refrecive VS permitive

// // refrecive
// let a = 34
// let b = a;
// b = 6;
// console.log(a, 'a'); // 
// console.log(b, 'b');


// // permitive
// let obect3 = {
//     name: 'mudaser',
//     age: 21,
//     city: 'Taunsa'
// }

// let object4 = obect3;
// object4.name = 'ali';
// console.log(obect3.name);
// console.log(object4.name);


// // object.values()

// console.log(Object.values(obect3));


// // copy object
// let object5 = { ...obect3 };
// object5.name = 'kamran';
// console.log(obect3.name);
// console.log(object5.name);

// // assign object
// let object6 = Object.assign(object2, obect3);


// console.log(object6);

// 1.
// Create an Object: Create an object representing a person with properties like name, age, and country.

const object = {
    name: 'Mudaser',
    age: 21,
    country: 'Pakistan',
}

// 2.
// Access Property: Write a function that takes an object and a property name as parameters and returns the value of that property.

const getProperty = (object, property) => {
    return object[property];
}
console.log(getProperty(object, 'name'));

// 3.
// Add Property: Write a function that adds a new property to an object.
const addProperty = (object, property, value) => {
    object[property] = value;
}
addProperty(object, 'city', 'Taunsa');
console.log(object);

// 4.
// Object Keys: Write a function that returns an array containing all the keys of an object.
const ObjectKeys = (obect) => {
    return Object.keys(obect);
}
console.log(ObjectKeys(object));


const users = [
    { name: "Ali", country: "Pakistan" },
    { name: "John", country: "USA" },
    { name: "Ahmed", country: "Pakistan" },
    { name: "Emily", country: "USA" },
    { name: "Zara", country: "UK" }
];



const players = [
    {
        name: "Ali",
        country: "Pakistan"
    },
    {
        name: "John",
        country: "USA"
    },
    {
        name: "Ahmed",
        country: "Pakistan"
    },
]
// write a function that add a new property to object
const addProperty2 = (object, property, value) => {
    object[property] = value;
}
addProperty2(players[2], 'age', 21);
console.log(players);


// write a function that return an array containing all the keys of an object

const shopes = [
    shop1 = {
        name: 'shop1',
        products: ['product1', 'product2', 'product3'],
        location: 'Multan',
    },
    shop2 = {
        name: 'shop2',
        products: ['product1', 'product2', 'product3'],
        location: 'Multan',
    }
]

const ObjectKeys2 = (obect) => {
    return Object.keys(obect);
}
console.log(ObjectKeys2(shopes[0]));

//  write a function that check if a property exist in an object or not

const checkProperty = (object, property) => {

    return object.hasOwnProperty(property) ? 'yes' : 'No';

}
console.log(checkProperty(shopes[0], 'products'));


const GetProperties = (object) => {

    for (const key in object) {
        console.log(object[key]);
    }
}
GetProperties(object);
console.log(GetProperties(object));



//  write a function that delete a property from a object
const deleteProperty = (object, property) => {
    delete object[property];
}
deleteProperty(object, 'country');
console.log(object);


//  create a functin that return an array containing  all the values of an object

const BikeShop = {
    name: "Malik Sharom",
    location: "hashmi Choke",
    Owner: 'mudaser azeem',
    Bikes: ['Honda', 'CD', 'Yama']
}

// const getValues = (object,) => {
//     const valuesArray = [];
//     for (const key in BikeShop) {

//         valuesArray.push(object[key]);
//     }
//     return valuesArray;
// }
// console.log(getValues(BikeShop));


//  short method

const getValues = (obj) => Object.values(obj);

console.log(getValues(BikeShop));


// Signup: Create a function named signUp that takes a username and password as parameters. Ensure that usernames are unique; if a username is already taken, display an appropriate message.


const signUp = (userName, Password) => {



}

signUp('mudaser_azeem', 12345678)