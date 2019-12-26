// Using var, we can assign a value to a variable, which is a way of to hold data
// and data types. Var is the older way of declaring a variable while let and const
// is the newer ES6 method. Using let, we can create a variable that we can reassign a
// new value to. This is different from const, which lets us assign a variable but not
// reassign the variable.

// A good use-case for using let would be if we want our variable to change depending on
// some kind of conditional. We can use const if we want to set a variable and not change
// it but we can mutate the variable such as adding to an array or object.

var myName = "Navin";

var areYouHome = true;

function takeOutTheDog() {
  let chores;
  if (areYouHome) {
    chores = "let the dog out";
    console.log(chores);
  } else {
    chores = "go home now";
    console.log(chores);
  }
}

const person = {
  name: "Navin",
  age: 34,
  isCool: true,
  hobbies: ["coding", "sports", "fishing"]
};

takeOutTheDog();
console.log(person);
person.hasDog = true;
console.log(person);

//Hoisting is when we run JavaScript code, the JavaScript engine does a process where
// it creates space in memory for all of our variables and functions we have created.
//Functions are saved in memory in there entireity but variables are initially saved
//as undefined until they are set. This allows us to console.log or call on functions
//before they are actually defined and created in our code when we are reading our
//code from top to bottom. Variables on the other hand will come back as undefined
//until our code actually gives them a value.
