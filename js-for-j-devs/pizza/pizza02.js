function selectPizza () {
  const selectedPizza = {};
  return selectedPizza;
}

function orderPizza (selectedPizza) {
  const orderedPizza = {};
  return orderedPizza;
}

function eatPizza (deliveredPizza) {
  console.log('yum!');
}

function demo () {
  let pizza = selectPizza();
  pizza = orderPizza(pizza);
  eatPizza(pizza);
}

demo();
