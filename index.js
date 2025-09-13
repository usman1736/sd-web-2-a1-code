"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

const superHeros = [
  { id: 1, name: "Batman", age: 23 },
  { id: 2, name: "Superman", age: 45 },
  { id: 3, name: "Flash", age: 23 },
  { id: 4, name: "Red Hood", age: 57 },
  { id: 5, name: "NightWing", age: 900 },
  { id: 6, name: "Spiderman", age: 32 },
  { id: 7, name: "Iron Man", age: 234 },
  { id: 8, name: "Hulk", age: 33 },
  { id: 9, name: "Green Arrow", age: 112 },
  { id: 10, name: "Captain America", age: 27 },
];

const brokenArray = [
  { id: 1, age: 30 },
  { id: 2, name: "", age: 25 },
  { id: 3 },
  { id: 4, name: "Batman" },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
const namesList = document.querySelector("#names-list");
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
  let listItem = document.createElement("li");
  listItem.textContent = users[i].name;
  namesList.appendChild(listItem);
}

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const ageLessThanFourty = document.querySelector("#young-characters-list");
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 40) {
    console.log(users[i].name);
    const age = document.createElement("li");
    age.textContent = users[i].name;
    ageLessThanFourty.appendChild(age);
  }
}

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function fList(user) {
  const namesList = document.querySelector("#function-list");
  for (let i = 0; i < user.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = user[i].name;
    namesList.appendChild(listItem);
  }
}
fList(superHeros);

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function ageUnder(user, age) {
  const list = document.querySelector("#age-filter-list");

  for (let i = 0; i < arr.length; i++) {
    if (user[i].age < age) {
      console.log(user[i].name);
      const li = document.createElement("li");
      li.textContent = user[i].name;
      list.appendChild(li);
    }
  }
}

ageUnder(users, 40);
// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function fList(user) {
  const namesList = document.querySelector("#function-list");
  const errors = document.querySelector("#error-messages");

  for (let i = 0; i < user.length; i++) {
    if (!user[i].name) {
      console.error("Error: missing name at index " + i);
      const p = document.createElement("p");
      p.textContent = "Error: missing name at index " + i;
      errors.appendChild(p);
      continue;
    }

    let listItem = document.createElement("li");
    listItem.textContent = user[i].name;
    namesList.appendChild(listItem);
  }
}

fList(superHeros);

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
function fListBroken(user) {
  const namesList = document.querySelector("#broken-array-list");
  const errors = document.querySelector("#broken-array-errors");

  for (let i = 0; i < user.length; i++) {
    if (!user[i].name) {
      console.error("Error: missing name at index " + i);
      const p = document.createElement("p");
      p.textContent = "Error: missing name at index " + i;
      errors.appendChild(p);
      continue;
    }

    let listItem = document.createElement("li");
    listItem.textContent = user[i].name;
    namesList.appendChild(listItem);
  }
}
