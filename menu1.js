var spicy = {
  name: "The spicy bOwl",
  meat: "ahi poke",
  veg: "green onion,avocado,cucumber",
  sauce: "spicy mayo, unagi sauce",
  price: 12.25
};

var shoyu = {
  name: "Teri Burger",
  meat: "ground beef",
  veg: "lettuce, tomato, onion",
  sauce: "teriyaki sauce",
  price: 12.25
};
var salt = {
  name: "The salted bOwl",
  meat: "ahi poke",
  veg: "onion, fish eggs",
  sauce: "salt",
  price: 10.75
};
var salad = {
  name: "The salad bOwl",
  meat: "ahi poke",
  veg: "salad,avocado,cucumber",
  sauce: "vinegar",
  price: 15.25
};
var salad1 = {
  name: "The salted salad bOwl",
  meat: "salted ahi poke",
  veg: "salad,avocado,cucumber",
  sauce: ", unagi",
  price: 15.25
};

function variables() {
  document.getElementById('1name').innerHTML = spicy.name;
  document.getElementById('1meat').innerHTML = spicy.meat;
  document.getElementById('1veg').innerHTML = spicy.veg;
  document.getElementById('1sauce').innerHTML = spicy.sauce;
  document.getElementById('1price').innerHTML = spicy.price;
  document.getElementById('2name').innerHTML = shoyu.name;
  document.getElementById('2meat').innerHTML = shoyu.meat;
  document.getElementById('2veg').innerHTML = shoyu.veg;
  document.getElementById('2sauce').innerHTML = shoyu.sauce;
  document.getElementById('2price').innerHTML = shoyu.price;
  document.getElementById('3name').innerHTML = salt.name;
  document.getElementById('3meat').innerHTML = salt.meat;
  document.getElementById('3veg').innerHTML = salt.veg;
  document.getElementById('3sauce').innerHTML = salt.sauce;
  document.getElementById('3price').innerHTML = salt.price;
  document.getElementById('4name').innerHTML = salad.name;
  document.getElementById('4meat').innerHTML = salad.meat;
  document.getElementById('4veg').innerHTML = salad.veg;
  document.getElementById('4sauce').innerHTML = salad.sauce;
  document.getElementById('4price').innerHTML = salad.price;
  document.getElementById('5name').innerHTML = salad.name;
  document.getElementById('5meat').innerHTML = salad.meat;
  document.getElementById('5veg').innerHTML = salad.veg;
  document.getElementById('5sauce').innerHTML = salad.sauce;
  document.getElementById('5price').innerHTML = salad.price;
  document.getElementById('6name').innerHTML = salad.name;
  document.getElementById('6meat').innerHTML = salad.meat;
  document.getElementById('6veg').innerHTML = salad.veg;
  document.getElementById('6sauce').innerHTML = salad.sauce;
  document.getElementById('6price').innerHTML = salad.price;
}


function spicyBowl(){
    var x = document.getElementById('amount').value;
  var tax = 0.04712;
  var bt = x * spicy.price;
  var t = bt * tax;
  var at = t + bt;
  
  var total= spicy.price * tax;
  document.getElementById('total').innerHTML = "total price is $" + at.toFixed(2);
}

function shoyuBowl(){
  var x = document.getElementById('amount1').value;
  var tax = 0.04712;
  var bt = x * shoyu.price;
  var t = bt * tax;
  var at = t + bt;
  
  var total= shoyu.price * tax;
  document.getElementById('final').innerHTML = "total price is $" + at.toFixed(2);
}

function saltBowl(){
  var x = document.getElementById('amount2').value;
  var tax = 0.04712;
  var bt = x * shoyu.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('product').innerHTML = "total price is $" + at.toFixed(2);
}

function saladBowl(){
  var x = document.getElementById('amount3').value;
  var tax = 0.04712;
  var bt = x * salad.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('results').innerHTML = "total price is $" + at.toFixed(2);
}
function salad1Bowl(){
  var x = document.getElementById('amount4').value;
  var tax = 0.04712;
  var bt = x * salad.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('tada').innerHTML = "total price is $" + at.toFixed(2);
}
function salad2Bowl(){
  var x = document.getElementById('amount5').value;
  var tax = 0.04712;
  var bt = x * salad.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('endresult').innerHTML = "total price is $" + at.toFixed(2);
}
