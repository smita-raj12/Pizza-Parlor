/*function pizzaParlor(){
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
*/

function Sizes(){
  this.sizes = {};
  this.currentId = 0
   
}

Sizes.prototype.addSize = function(newsize) {
  console.log("newsize",newsize)
  newsize.id = this.assignId();
  this.sizes[newsize.id] = newsize;
  
};

Sizes.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Sizes.prototype.findSize = function(id) {
  console.log("sizeType",id)
  if (this.sizes[id] != undefined) {
    return this.sizes[id];
  }
  return false;
};

function Size(sizeType,sizeCost){
  this.sizeType = sizeType;
  this.sizeCost = sizeCost;
}

let sizes = new Sizes();
let newSize = new Size("small", 10.00);
sizes.addSize(newSize);
newSize = new Size("medium", 12.00);
sizes.addSize(newSize);
newSize = new Size("large", 14.00);
sizes.addSize(newSize);
console.log("sizes",sizes)


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

function Toping(topings,topingCost){
  this.topings = topings;
  this.topingCost = topingCost
}

let topings = new Topings();
let newToping = new Toping("chease", 2.00);
topings.addToping(newToping);
newToping = new Toping("pinaple", 4.00);
topings.addToping(newToping);
newToping = new Toping("peproni",8.00);
topings.addToping(newToping);
console.log("topings",topings)
//User interface logic

//let pizzaparlor = new pizzaParlor();

/*function displayPizzaDetails(pizzaToDisplay) {
  let pizza = $("ul#Pizzas");
  let htmlForPizza = "";
  Object.keys(pizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaToDisplay.findPizza(key);
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.fullname +  "</li>";
  });
  pizza.html(htmlForPizza);
}
*/
function displaySizeDetails(sizeToDisplay) {
 // console.log("key",key)
  let pizzaSize = $("ul#sizes");
  let htmlForSize = "";
  Object.keys(sizeToDisplay.sizes).forEach(function(key) {
    //console.log("key",key)
    const size = sizeToDisplay.findSize(key);
    htmlForSize += "<li id=" + size.id + ">" + size.sizeType + " "  +  "</li>";
  });
  pizzaSize.html(htmlForSize);
}
function costSize(inputedSizeType){
  console.log("inputedSize",inputedSizeType);
  for (let i=1; i<4; i++) {
    console.log("")
    if(sizes.sizes[i].sizeType === inputedSizeType){
    return  pizzaCostperSize = sizes.sizes[i].sizeCost
    //console.log("pizzaCostperSize",pizzaCostperSize)
    }
  }
}

function displayTopingDetails(topingToDisplay) {
  let pizzaToping = $("ul#Topings");
  let htmlForToping = "";
  Object.keys(topingToDisplay.topings).forEach(function(key) {
    const toping = topingToDisplay.findToping(key);
    htmlForToping += "<li id=" + toping.id + ">" + toping.topings + " " +   "</li>";
  });
  pizzaToping.html(htmlForToping);
}

/*function showPizza(pizzaId) {
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
*/
$(document).ready(function() {
  $("form#pizaform").submit(function(event) {
  //attachPizzaListeners();
  event.preventDefault();
  const inputtedFullName = $("input#name").val();
  const inputedPnoneno = $("input#phone").val();
  const inputedSizes = $("input[name='type']:checked").val();
  const inputedCheese = $("#cheese").val();
  const inputedPepperoni = $("#pepperoni").val();
  const inputedArtichoke= $("#artichoke").val();
  const inputedPainaple = $("#painaple").val();
  console.log("inputedSizes",inputedSizes)
  //let FindSize = sizes.findSize(inputedSizes)
  let pizzaCostperSize=costSize(inputedSizes)
  console.log("pizzaCostperSize",pizzaCostperSize)
  let TotalCost = pizzaCostperSize + pizzaCostperTopping
  //console.log("FindSize",FindSize)
  //console.log("sizes.test",sizes.sizes[1].sizeType[inputedSizes])
    //let newSizes = new Sizes();
    //let Fullsize = new Size(inputedSizes);
    //newSizes.addSize(Fullsize);
    //let newTopings = new Topings();
   // let topingCost = new Toping("3")
   // let Fulltopings = new Toping(inputedCheese,inputedPepperoni,inputedArtichoke,inputedPainaple,topingCost)
    //newTopings.addToping(Fulltopings);
  //  let newPizza = new Pizza(inputtedFullName,inputedPnoneno,newTopings,newSizes)
   // console.log("newPizza",newPizza)
   // pizzaparlor.addPizza(newPizza)
   //displaySizeDetails()
    //displayPizzaDetails(pizzaparlor)
  }); 
});    