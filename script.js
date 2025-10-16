// Array with Object (Array nested objects)
const disneyCharacters = [
  { type: "mouse", name: "Mickey" },
  { type: "mouse", name: "Minnie" },
  { type: "dog", name: "Pluto" },
  { type: "duck", name: "Donald" },
  { type: "duck", name: "Daisy" },
  { type: "dog", name: "Goofy" },
  { type: "cat", name: "Figaro" },
  { type: "chipmunk", name: "Chip" },
  { type: "chipmunk", name: "Dale" },
  { type: "bird", name: "Clara Cluck" },
];
console.log(disneyCharacters);
console.log(disneyCharacters[4]);
console.log(disneyCharacters[4].name);

const list = document.querySelector("#list");

// Mest relevant for oppgaven
for (let index = 0; index < disneyCharacters.length; index++) {
  console.log(disneyCharacters[index].name);
  const listItem = document.createElement("li");
  listItem.textContent = `Name: ${disneyCharacters[index].name}. Type: ${disneyCharacters[index].type}`
  list.appendChild(listItem);
};

/*disneyCharacters.type = "Duck";
disneyCharacters.name = "Onkel Skrue";
console.log(disneyCharacters);*/

//
console.log("-----------------------------------------------");
//

// Object with array (Object nested array)
const food = {
  vegetables: [
    { name: "Carrot", color: "orange" },
    { name: "Broccoli", color: "green" },
    { name: "Cabbage", color: "green" },
    { name: "Potato", color: "brown" },
    { name: "Cucumber", color: "green" },
  ],

  fruits: [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "yellow" },
    { name: "Orange", color: "orange" },
    { name: "Pear", color: "green" },
    { name: "Mango", color: "orange" },
  ],

  berries: [
    { name: "Strawberry", color: "red" },
    { name: "Blueberry", color: "blue" },
    { name: "Raspberry", color: "red" },
    { name: "Blackberry", color: "black" },
    { name: "Cloudberry", color: "orange" },
  ],
};

console.log(food);
console.log(food.vegetables[0].name, food.vegetables[1].name, food.vegetables[3].name, food.vegetables[4].name);

// Gets one of the objects inside food
for (let index = 0; index < food.vegetables.length; index++) {
  console.log(food.vegetables[index].name);
} 

const foodList = document.querySelector("#foodList")
// Loops through each category in food (vegetables, fruits, berries)
// Object.keys gets an array of an object's keys
for (let index = 0; index < Object.keys(food).length; index++) {
  const itemsArray = food[Object.keys(food)[index]];

  // Loops through each item in the current category array and prints its name
  for (let item = 0; item < itemsArray.length; item++) {
    console.log(itemsArray[item].name);
    
    const foodNames = document.createElement("li");
    foodNames.textContent = `Navn: ${itemsArray[item].name}. Farge: ${itemsArray[item].color}`;
    foodList.appendChild(foodNames);
  }
}

/*food.vegetables.push({ name: "Peach" });
console.log(food);*/

//
console.log("-----------------------------------------------");
//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

//
console.log("-----------------------------------------------");
//

// For loop

// index : i
// index++ : index = index + 1 eller index =+ 1
for (let index = 0; index <= 10; index++) {
  console.log(`Opptelling: ${index}`);
};

// index-- : index = index - 1
// index er 10, om index er større eller samme som 0 ta index - 1 til index til vi når
for (let index = 10; index >= 0; index--) {
  console.log(`Nedtelling: ${index}`);
};