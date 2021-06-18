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

pizzaParlor.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

function Pizza(fullname,topings,size){
this.fullname = fullname;
this.topings = topings;
this.sizes = sizes
}

function Sizes(){
   this.sizes = {};
   this.currentId = 0 
}
Sizes.prototype.addSize = function(size) {
  size.id = this.assignId();
  this.sizes[size.id] = size;
};

Sizes.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Sizes.prototype.findSize = function(id) {
  if (this.sizes[id] != undefined) {
    return this.sizes[id];
  }
  return false;
};

function Size(sizeType,cost){
  this.sizeType = sizeType;
  this.cost = cost;
}

function Topings(){
    this.topings = {};
    this.currentId = 0;
}
