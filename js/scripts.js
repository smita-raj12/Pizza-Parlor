function pizzaParlor(){
  this.pizzas = {};
  this.currentId = 0;
}

pizzaParlor.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

pizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
