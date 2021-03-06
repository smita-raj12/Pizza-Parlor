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

function displayPizzaDetails(pizzaToDisplay) {
  let pizza = $("ul#Pizzas");
  let htmlForPizza = "";
  Object.keys(pizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaToDisplay.findPizza(key);
    htmlForPizza += "<li id=" + pizza.id + ">" + pizza.fullname +  "</li>";
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


function costSize(inputedSizeType,sizes){
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

function costToping(inputedTopingType,topings){
  for (let i = 1; i < 4; i++) {
    if(topings.topings[i].topings === inputedTopingType){
      topings.topings[i].userSelectedToping = "Yes";
      return  pizzaCostpertoping = topings.topings[i].topingCost
    }
  }
  return  pizzaCostpertoping = 0
}



function showPizza(pizzaId,pizzaparlor) {
  const pizza = pizzaparlor.findPizza(pizzaId);
  $("#show-pizza").show();
  $(".fname").html(pizza.fullname);
  $(".phonenum").html(pizza.phoneno);
  $(".tcost").html(pizza.totalcost)
  if($('input:radio[name=deliverytype]:checked').val() == "home"){
    showAddress(1)
  }else{
    $("#show-address").hide();
  }
}

//functio for displaying address


function displayAddressDetails(pizza) {
  let addressList = $("ul#addresses");
  let htmlForAddressInfo = "";
  Object.keys(pizza.addresses).forEach(function (key) {
    const address = pizza.findAddress(key);
    if($('input:radio[name=deliverytype]:checked').val() == "home"){
      htmlForAddressInfo += "<li id=" + address.id + ">" + address.street + "</li>";
    }else{
      $("#show-address").hide();
    }
  });
  addressList.html(htmlForAddressInfo);
}

//functions for attaching event listeners

function attachPizzaListeners(pizzaparlor) {
  $("ul#Pizzas").on("click", "li", function() {
    showPizza(this.id,pizzaparlor);
  });
  displayPizzaDetails(pizzaparlor)
}

function attachDeliveryTypeListeners() {
  $("#inline_content input[name='deliverytype']").click( function() {
      if($('input:radio[name=deliverytype]:checked').val() == "home"){
        $("#addressdisp-form").slideDown("slow");
    }else{
      $("#addressdisp-form").hide();
    }
  });
}



function attachAddressListeners(newAddress) {
  $("ul#addresses").on("click", "li", function() {
    showAddress(this.id,newAddress);
  });
  displayAddressDetails(newAddress)
}


function showAddress(addressId,newAddress) {
  const address = newAddress.findAddress(addressId);
  $("#show-address").show();
  $(".street").html(address.street);
  $(".region").html(address.region);
  $(".postal").html(address.postalCode)
}

$(document).ready(function() {

  let newPizzaparlor = new pizzaParlor();
  let newAddresses = new Addresses();
  attachAddressListeners(newAddresses);
  attachPizzaListeners(newPizzaparlor);
//----------------sizes-----------------

  let sizes = new Sizes();
  let newSize = new Size("Small Size", 10.00,"No");
  sizes.addSize(newSize);
  newSize = new Size("Medium Size", 12.00,"No");
  sizes.addSize(newSize);
  newSize = new Size("Large Size", 14.00,"No");
  sizes.addSize(newSize);

// ------------Toppings----------------

  let topings = new Topings();
  let newToping = new Toping("Cheese", 2.00, "No");
  topings.addToping(newToping);
  newToping = new Toping("Pepperoni", 2.00, "No");
  topings.addToping(newToping);
  newToping = new Toping("Artichoke",2.00, "No");
  topings.addToping(newToping);
  newToping = new Toping("Pinapple",2.00, "No");
  topings.addToping(newToping);

  
  
  $("#addressdisp-form").hide();
  attachDeliveryTypeListeners();

  $("form#pizaform").submit(function(event) {
  event.preventDefault();
  const inputtedAddressStreet = $("input#new-street").val();
  const inputtedAddressRegion = $("input#new-region").val();
  const inputtedAddressPostalCode = $("input#new-postal-code").val();
  let pizzaCostperTopping = 0
  const inputtedFullName = $("input#name").val();
  const inputedPnoneno = $("input#phone").val();
  const inputedSizes = $("#size").val();
  $("input[type=checkbox]:checked").each( function() {
    const inputedToping = $(this).val();
    pizzaCostperTopping += costToping(inputedToping,topings)
  });

  let pizzaCostperSize = costSize(inputedSizes,sizes);
  TotalCost = pizzaCostperSize + pizzaCostperTopping;
  let FullAddress = new Address(inputtedAddressStreet, inputtedAddressRegion, inputtedAddressPostalCode);
  newAddresses.addAddress(FullAddress);
  let newPizza = new Pizza(inputtedFullName,inputedPnoneno,TotalCost,newAddresses);
  newPizzaparlor.addPizza(newPizza);
  displayPizzaDetails(newPizzaparlor);
  displaySizeDetails(sizes);
  displayTopingDetails(topings);
  displayAddressDetails(newAddresses);
  }); 
});    