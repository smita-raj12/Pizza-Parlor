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

function Pizza(fullname,phoneno,topings,sizes){
this.fullname = fullname;
this.phoneno = phoneno;
this.topings = topings;
this.sizes = sizes;
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

Topings.prototype.addToping = function(toping) {
  toping.id = this.assignId();
  this.topings[toping.id] = toping;
};

Topings.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Topings.prototype.findToping = function(id) {
  if (this.topings[id] != undefined) {
    return this.topings[id];
  }
  return false;
};

function Toping(TopingType,cost){
  this.TopingType = TopingType;
  this.cost = cost;
}

//User interface logic

let pizzaparlor = new pizzaParlor();

function displayPizzaDetails(pizzaToDisplay) {
  let pizza = $("ul#Pizzas");
  let htmlForPizza = "";
  Object.keys(pizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaToDisplay.findPizza(key);
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.fullname +  "</li>";
  });
  pizza.html(htmlForPizza);
}

function displaySizeDetails(sizeToDisplay) {
  let pizzaSize = $("ul#sizes");
  let htmlForSize = "";
  Object.keys(sizeToDisplay.sizes).forEach(function(key) {
    const size = sizeToDisplay.findSize(key);
    htmlForSize += "<li id=" + size.id + ">" + size.sizeType + " " + size.cost +  "</li>";
  });
  pizzaSize.html(htmlForSize);
}


function displayTopingDetails(topingToDisplay) {
  let pizzaToping = $("ul#Topings");
  let htmlForToping = "";
  Object.keys(topingToDisplay.topings).forEach(function(key) {
    const toping = topingToDisplay.findToping(key);
    htmlForToping += "<li id=" + toping.id + ">" + toping.topingType + " " + toping.cost +  "</li>";
  });
  pizzaToping.html(htmlForToping);
}

function showPizza(pizzaId) {
  const pizza = pizzaparlor.findPizza(pizzaId);
  $("#show-pizza").show();
  $(".fname").html(pizza.fullName);
  $(".phonenum").html(pizza.phoneno);
  $(".sizes").html(displaySizeDetails(pizza.sizes));
  $(".topings").html(displayTopingDetails(pizza.topings));
}

function attachPizzaListeners() {
  $("ul#Pizzas").on("click", "li", function() {
    showPizza(this.id);
  });
  displayPizzaDetails(pizzaparlor)
}

$(document).ready(function() {
  $("form#pizaform").submit(function(event) {
    attachPizzaListeners();
    event.preventDefault();
    const inputtedFullName = $("input#name").val();
    const inputedPnoneno = $("input#phone").val();
    const inputedSizes = $("#size").val();
    const inputedCheese = $("#cheese").val();
    const inputedPepperoni = $("#pepperoni").val();
    const inputedArtichoke= $("#artichoke").val();
    const inputedPainaple = $("#painaple").val();
    let newSize = new Sizes();
    let Fullsize = new Size(inputedSizes);
    newSize.addSize(Fullsize);
    let newToping = new Topings();
    let Fulltopings = new Toping(inputedCheese,inputedPepperoni,inputedArtichoke,inputedPainaple)
    newToping.addToping(Fulltopings);
    let newPizza = new Pizza(inputtedFullName,inputedPnoneno,newSize,newToping)
    console.log("newPizza",newPizza)
    pizzaparlor.addPizza(newPizza)
    displayPizzaDetails(pizzaparlor)
  }); 
});    