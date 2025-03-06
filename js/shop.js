import {products} from "./products.js";

console.log(products);

var cart = [];
var count = 0
var total = 0;

// Exercise 1
function buy(id) {
    
    const productFound = products.find(items => items.id === id);

    const productsInCart = cart.find(items => items.id === id);

    if(!productsInCart){
        cart.push({...productFound, quantity : 1});
    }else{
        productsInCart.quantity++;
    } 

    document.getElementById("count_product").textContent = ++count;

}

// Exercise 2
function cleanCart() {

    cart.forEach(productInCArt => productInCArt.quantity = 0);
    cart = []; 
    count =  total = 0; 

    document.getElementById("count_product").textContent = 0;
    document.getElementById("cart_list").innerHTML = ""; 
    document.getElementById("total_price").innerHTML = 0; 
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}

window.buy = buy;
window.cleanCart = cleanCart;
window.open_modal = open_modal;