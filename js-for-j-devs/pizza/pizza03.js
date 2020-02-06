const supplyPizza = require('./dominos01.js');

function selectPizza () {
  const selectedPizza = {};
  return selectedPizza;
}

function eatPizza (deliveredPizza) {
  console.log('yum!');
}

function demo () {
  const selectedPizza = selectPizza();
  const deliveredPizza = supplyPizza(selectedPizza);
  eatPizza(deliveredPizza);
}

demo();
