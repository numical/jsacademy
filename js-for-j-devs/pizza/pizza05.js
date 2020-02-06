const supplyPizza = require('./dominos03.js');

function selectPizza () {
  const selectedPizza = {};
  return selectedPizza;
}

function eatPizza (deliveredPizza) {
  console.log('yum!');
}

function goHungry () {
  console.log('sad!');
}

function demo () {
  const pizza = selectPizza();
  supplyPizza(pizza)
    .then(eatPizza)
    .catch(goHungry);
}

demo();
