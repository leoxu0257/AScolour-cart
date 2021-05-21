var small = document.getElementById('small');
var medium = document.getElementById('medium');
var large = document.getElementById('large');
var submitBtn = document.getElementById('submit');
var size = document.getElementById('size-detail');
var cartNumber = document.getElementById('cart-number');
var sizeSelected = 0;
var total = 0;

small.onclick = function() {
    size.innerHTML = "S";
    sizeSelected = 1;
};

medium.onclick = function() {
    size.innerHTML = "M";
    sizeSelected = 1;
};

large.onclick = function() {
    size.innerHTML = "L";
    sizeSelected = 1;
};

submitBtn.onclick = function() {
    total++;
    cartNumber.innerHTML = total;
};

var cart = document.getElementById("cart");
cart.onclick = function(){
    
}