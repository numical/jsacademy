function takeOrder (selectedPizza) {
  // ...
}

function makePizza (selectedPizza) {
  const madePizza = {};
  return madePizza;
}

function deliverPizza (madePizza) {
  // ...
}

function supplyPizza (pizza) {
  takeOrder(pizza);
  const madePizza = makePizza(pizza);
  deliverPizza(madePizza);
}

module.exports = supplyPizza;
