const supplyPizza = require('./dominos02.js');

function selectPizza () {
  const selectedPizza = {};
  return selectedPizza;
}

function eatPizza (deliveredPizza) {
  console.log('yum!');
}

function demo () {
  const pizza = selectPizza();
  supplyPizza(pizza, eatPizza);
}

demo();
