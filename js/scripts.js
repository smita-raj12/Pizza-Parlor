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

function Pizza(fullname,phoneno,totalcost){
  this.fullname = fullname;
  this.phoneno = phoneno;
  this.totalcost = totalcost
}

function Sizes(){
  this.sizes = {};
  this.currentId = 0
}

Sizes.prototype.addSize = function(newsize) {
  newsize.id = this.assignId();
  this.sizes[newsize.id] = newsize;
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

function Size(sizeType,sizeCost,userSelectedSize){
  this.sizeType = sizeType;
  this.sizeCost = sizeCost;
  this.userSelectedSize = userSelectedSize;
}

let sizes = new Sizes();
let newSize = new Size("Small Size", 10.00,"No");
sizes.addSize(newSize);
newSize = new Size("Medium Size", 12.00,"No");
sizes.addSize(newSize);
newSize = new Size("Large Size", 14.00,"No");
sizes.addSize(newSize);


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

function Toping(topings,topingCost,userSelectedToping){
  this.topings = topings;
  this.topingCost = topingCost
  this.userSelectedToping = userSelectedToping;
}

let TotalCost = 0

let topings = new Topings();
let newToping = new Toping("Cheese", 2.00, "No");
topings.addToping(newToping);
newToping = new Toping("Pepperoni", 2.00, "No");
topings.addToping(newToping);
newToping = new Toping("Artichoke",2.00, "No");
topings.addToping(newToping);
newToping = new Toping("Pinapple",2.00, "No");
topings.addToping(newToping);


//User interface logic

let pizzaparlor = new pizzaParlor();

function displayPizzaDetails(pizzaToDisplay) {
  let pizza = $("ul#Pizzas");
  let htmlForPizza = "";
  Object.keys(pizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaToDisplay.findPizza(key);
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.fullname + "</li>";
  });
  pizza.html(htmlForPizza);
}

function displaySizeDetails(sizeToDisplay) {
  let pizzaSize = $("ul#sizes");
  let htmlForSize = "";
  Object.keys(sizeToDisplay.sizes).forEach(function(key) {
    const size = sizeToDisplay.findSize(key);
    if(size.userSelectedSize === "Yes") { 
      htmlForSize += "<li id=" + size.id + ">" + size.sizeType + " "  +  size.sizeCost + "</li>";
    }
  });
  pizzaSize.html(htmlForSize);
}

function costSize(inputedSizeType){
  for (let i=1; i<4; i++) {
    if(sizes.sizes[i].sizeType === inputedSizeType){
      sizes.sizes[i].userSelectedSize = "Yes"
    return pizzaCostperSize = sizes.sizes[i].sizeCost
    }
  }
  return pizzaCostperSize = 0
}

function displayTopingDetails(topingToDisplay) {
  let pizzaToping = $("ul#Topings");
  let htmlForToping = "";
  Object.keys(topingToDisplay.topings).forEach(function(key) {
    const toping = topingToDisplay.findToping(key);
    if(toping.userSelectedToping === "Yes") { 
      htmlForToping += "<li id=" + toping.id + ">" + toping.topings + " " + toping.topingCost + "</li>";
    }  
  });
  pizzaToping.html(htmlForToping);
}


function costToping(inputedTopingType){
  for (let i = 1; i < 4; i++) {
    if(topings.topings[i].topings === inputedTopingType){
      topings.topings[i].userSelectedToping = "Yes";
      return  pizzaCostpertoping = topings.topings[i].topingCost
    }
  }
  return  pizzaCostpertoping = 0
}

function showPizza(pizzaId) {
  const pizza = pizzaparlor.findPizza(pizzaId);
  $("#show-pizza").show();
  $(".fname").html(pizza.fullName);
  $(".phonenum").html(pizza.phoneno);
  $(".tcost").html(pizza.totalcost)
}

function attachPizzaListeners() {
  $("ul#Pizzas").on("click", "li", function() {
    showPizza(this.id);
  });
  displayPizzaDetails(pizzaparlor)
}

function attachDeliveryTypeListeners() {
  console.log("test3")
    $("#inline_content input[name='deliverytype']").click( function() {
      if($('input:radio[name=deliverytype]:checked').val() == "home"){
        $("#addressdisp-form").slideDown("slow");
    }else{
      $("#addressdisp-form").hide();
    }
  });
}

$(document).ready(function() {
  $("#addressdisp-form").hide()
  attachDeliveryTypeListeners()
  $("form#pizaform").submit(function(event) {
  attachPizzaListeners();
  console.log("test2")
  event.preventDefault();
  const inputedDelivaryType = $("input[name='deliverytype']:checked").val();
  let pizzaCostperTopping = 0
  const inputtedFullName = $("input#name").val();
  const inputedPnoneno = $("input#phone").val();
  const inputedSizes = $("input[name='type']:checked").val();
  $("input[type=checkbox]:checked").each( function() {
    const inputedToping = $(this).val();
    pizzaCostperTopping += costToping(inputedToping)
  });

  let pizzaCostperSize = costSize(inputedSizes)
  TotalCost = pizzaCostperSize + pizzaCostperTopping
  let newPizza = new Pizza(inputtedFullName,inputedPnoneno,TotalCost)
  pizzaparlor.addPizza(newPizza)
  displayPizzaDetails(pizzaparlor)
  displaySizeDetails(sizes)
  displayTopingDetails(topings)
  }); 
});    