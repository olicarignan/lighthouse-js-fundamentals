const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

let newIngredients = ingredients.reverse()

for (let k = 0; k < newIngredients.length; k++) {
  console.log(newIngredients[k]);
}
