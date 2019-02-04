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
  sauce: "unagi",
  price: 16.25
};
var salad2 = {
  name: "The spicy salad bOwl",
  meat: "salted ahi poke",
  veg: "salad,avocado,cucumber",
  sauce: "unagi, spicy sauce",
  price: 16.25
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
  document.getElementById('5name').innerHTML = salad1.name;
  document.getElementById('5meat').innerHTML = salad1.meat;
  document.getElementById('5veg').innerHTML = salad1.veg;
  document.getElementById('5sauce').innerHTML = salad1.sauce;
  document.getElementById('5price').innerHTML = salad1.price;
  document.getElementById('6name').innerHTML = salad2.name;
  document.getElementById('6meat').innerHTML = salad2.meat;
  document.getElementById('6veg').innerHTML = salad2.veg;
  document.getElementById('6sauce').innerHTML = salad2.sauce;
  document.getElementById('6price').innerHTML = salad2.price;
}


function spicyBowl(){
    var x = document.getElementById('amount').value;
  var tax = 0.04712;
  var bt = x * spicy.price;
  var t = bt * tax;
  var at = t + bt;
  
  var total= spicy.price * tax;
  document.getElementById('total').innerHTML = "total price is $" + at.toFixed(2);
  document.getElementById('list1').innerHTML = "you bought $" + at.toFixed(2) + " "+ "worth of spicy ahi bowls";
}

function shoyuBowl(){
  var x = document.getElementById('amount1').value;
  var tax = 0.04712;
  var bt = x * shoyu.price;
  var t = bt * tax;
  var at = t + bt;
  
  var total= shoyu.price * tax;
  document.getElementById('final').innerHTML = "total price is $" + at.toFixed(2);
   document.getElementById('list2').innerHTML = "you bought $" + at.toFixed(2) + " " + "worth of teri burgers";
}

function saltBowl(){
  var x = document.getElementById('amount2').value;
  var tax = 0.04712;
  var bt = x * shoyu.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('product').innerHTML = "total price is $" + at.toFixed(2);
   document.getElementById('list3').innerHTML = "you bought $" + at.toFixed(2) + " "+ "worth of salted ahi bowls";
}

function saladBowl(){
  var x = document.getElementById('amount3').value;
  var tax = 0.04712;
  var bt = x * salad.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('results').innerHTML = "total price is $" + at.toFixed(2);
   document.getElementById('list4').innerHTML = "you bought $" + at.toFixed(2) + " "+ "worth of salad ahi bowls";
}
function salad1Bowl(){
  var x = document.getElementById('amount4').value;
  var tax = 0.04712;
  var bt = x * salad.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('tada').innerHTML = "total price is $" + at.toFixed(2);
   document.getElementById('list5').innerHTML = "you bought $" + at.toFixed(2) + " "+ "worth of salted salad ahi bowls";
}
function salad2Bowl(){
  var x = document.getElementById('amount5').value;
  var tax = 0.04712;
  var bt = x * salad.price;
  var t = bt * tax;
  var at = t + bt;
  
  document.getElementById('endresult').innerHTML = "total price is $" + at.toFixed(2);
   document.getElementById('list6').innerHTML = "you bought $" + at.toFixed(2) + " "+ "worth of spicy salad ahi bowls"; }
