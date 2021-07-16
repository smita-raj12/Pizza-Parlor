//construction function for pizza parlor

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

function Pizza(fullname,phoneno,totalcost,addresses){
  this.fullname = fullname;
  this.phoneno = phoneno;
  this.totalcost = totalcost
  this.addresses = addresses
}

//functios for selecting sizes

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


// functions for selecting toppings

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

// functions for adding address if you select home delivery redio button

function Addresses() {
  this.addresses = {};
  this.currentId = 0;
}


Addresses.prototype.addAddress = function(address) {
  address.id = this.assignAddressId();
  this.addresses[1] = address;
};

Addresses.prototype.assignAddressId = function () {
  this.currentId += 1;
  return this.currentId;
};

Addresses.prototype.findAddress = function (id) {
  if (this.addresses[id] != undefined) {
    return this.addresses[id];
  }
  return false;
};

function Address( street, region, postalCode) {
  this.street = street;
  this.region = region;
  this.postalCode = postalCode;
}

//User interface logic for pizza parlor

let pizzaparlor = new pizzaParlor();

function displayPizzaDetails(pizzaToDisplay) {
  let pizza = $("ul#Pizzas");
  let htmlForPizza = "";
  Object.keys(pizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaToDisplay.findPizza(key);
<<<<<<< HEAD
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.fullname + "</li>";
=======
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.fullname +  "</li>";
>>>>>>> main
  });
  pizza.html(htmlForPizza);
}

//functions for displaying size details

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

//function for calcutating cost of size

function costSize(inputedSizeType){
  for (let i=1; i<4; i++) {
    if(sizes.sizes[i].sizeType === inputedSizeType){
      sizes.sizes[i].userSelectedSize = "Yes"
    return pizzaCostperSize = sizes.sizes[i].sizeCost
    }
  }
  return pizzaCostperSize = 0
}

//function for displaying toppings details

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

//functions for calculating topping cost

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
  $(".fname").html(pizza.fullname);
  $(".phonenum").html(pizza.phoneno);
  $(".tcost").html(pizza.totalcost)
  showAddress(1)
}

//functio for displaying address


function displayAddressDetails(pizza) {
  let addressList = $("ul#addresses");
  let htmlForAddressInfo = "";
  Object.keys(pizza.addresses).forEach(function (key) {
    const address = pizza.findAddress(key);
    if($('input:radio[name=deliverytype]:checked').val() == "home"){
      htmlForAddressInfo += "<li id=" + address.id + ">" + address.street + "</li>";
    }
  });
  addressList.html(htmlForAddressInfo);
}

//functions for attaching event listeners

function attachPizzaListeners() {
  $("ul#Pizzas").on("click", "li", function() {
    showPizza(this.id);
  });
  displayPizzaDetails(pizzaparlor)
}

function attachDeliveryTypeListeners() {
<<<<<<< HEAD
  console.log("test3")
    $("#inline_content input[name='deliverytype']").click( function() {
=======
  $("#inline_content input[name='deliverytype']").click( function() {
>>>>>>> main
      if($('input:radio[name=deliverytype]:checked').val() == "home"){
        $("#addressdisp-form").slideDown("slow");
    }else{
      $("#addressdisp-form").hide();
    }
  });
}

<<<<<<< HEAD
$(document).ready(function() {
  $("#addressdisp-form").hide()
  attachDeliveryTypeListeners()
  $("form#pizaform").submit(function(event) {
  attachPizzaListeners();
  console.log("test2")
  event.preventDefault();
  const inputedDelivaryType = $("input[name='deliverytype']:checked").val();
=======
let newAddresses = new Addresses();
function attachAddressListeners() {
  $("ul#addresses").on("click", "li", function() {
    showAddress(this.id);
  });
  displayAddressDetails(newAddresses)
}


function showAddress(addressId) {
  const address = newAddresses.findAddress(addressId);
  $("#show-address").show();
  $(".street").html(address.street);
  $(".region").html(address.region);
  $(".postal").html(address.postalCode)
}

$(document).ready(function() {
  attachPizzaListeners();
  attachAddressListeners()
  $("#addressdisp-form").hide();
  attachDeliveryTypeListeners();
  $("form#pizaform").submit(function(event) {
  event.preventDefault();
  const inputedDelivaryType = $("input[name='deliverytype']:checked").val();
  const inputtedAddressStreet = $("input#new-street").val();
  const inputtedAddressRegion = $("input#new-region").val();
  const inputtedAddressPostalCode = $("input#new-postal-code").val();
>>>>>>> main
  let pizzaCostperTopping = 0
  const inputtedFullName = $("input#name").val();
  const inputedPnoneno = $("input#phone").val();
  const inputedSizes = $("#size").val();
  $("input[type=checkbox]:checked").each( function() {
    const inputedToping = $(this).val();
    pizzaCostperTopping += costToping(inputedToping)
  });

  let pizzaCostperSize = costSize(inputedSizes)
  TotalCost = pizzaCostperSize + pizzaCostperTopping
  let FullAddress = new Address(inputtedAddressStreet, inputtedAddressRegion, inputtedAddressPostalCode)
  newAddresses.addAddress(FullAddress)
  let newPizza = new Pizza(inputtedFullName,inputedPnoneno,TotalCost,newAddresses)
  pizzaparlor.addPizza(newPizza)
  displayAddressDetails(newAddresses)
  displayPizzaDetails(pizzaparlor)
  displaySizeDetails(sizes)
  displayTopingDetails(topings)
  }); 
});    