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

/*disneyCharacters.type = "Duck";
disneyCharacters.name = "Onkel Skrue";
console.log(disneyCharacters);*/

//
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
console.log(
  food.vegetables[0].name,
  food.vegetables[1].name,
  food.vegetables[3].name,
  food.vegetables[4].name
);

/*food.vegetables.push({ name: "Peach" });
console.log(food);*/

//
//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
