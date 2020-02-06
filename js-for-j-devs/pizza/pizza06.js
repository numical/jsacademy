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

async function demo () {
  try {
    const pizza = selectPizza();
    const deliveredPizza = await supplyPizza(pizza);
    eatPizza(deliveredPizza);
  } catch (err) {
    goHungry();
  }
}

demo();
