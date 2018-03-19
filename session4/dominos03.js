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

function supplyPizza (pizza, pizzaDelivered) {
  takeOrder(pizza);
  const madePizza = makePizza(pizza);
  deliverPizza(madePizza);
  if (pizzaDelivered) {
    pizzaDelivered(madePizza);
  } else {
    return Promise.resolve(madePizza);
  }
}

module.exports = supplyPizza;
