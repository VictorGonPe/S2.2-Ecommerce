import {products} from "./products.js";

var cart = [];
var count = 0
var total = 0;
var subtotalWithDiscount;

document.getElementById("total_price").innerHTML = 0; 

let close =  document.querySelector(".btn-close");
close.addEventListener("click",exitCart);

// Exercise 1
function buy(id) {
    
    const productFoundInArray = products.find(items => items.id === id);

    const productsInCart = cart.find(items => items.id === id);

    if(!productsInCart){
        cart.push({...productFoundInArray, quantity : 1});
    }else{
        productsInCart.quantity++;
    } 
    document.getElementById("count_product").textContent = ++count;

}

// Exercise 2
function cleanCart() {

    cart = []; 
    count =  total = 0; 

    document.getElementById("count_product").textContent = 0;
    document.getElementById("cart_list").innerHTML = ""; 
    document.getElementById("total_price").innerHTML = 0; 
}

// Exercise 3
function calculateTotal() {
    cart.forEach(productos => {
        if(productos.hasOwnProperty("offer") && productos.quantity >= productos.offer.number){    
            applyPromotionsCart(productos);   
        } else {
            total = total + (productos.price * productos.quantity);
        }
    })
    document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart(item) {
    // Apply promotions to each item in the array "cart"
    let discount = item.price * (item.offer.percent/100);
    subtotalWithDiscount = (item.price - discount) * item.quantity ;
        
    total = total + subtotalWithDiscount;
    
    //document.querySelector(".prueba").textContent += ` (${subtotalWithDiscount.toFixed(2)} €)`
}

// Exercise 5
function printCart() {
    let cartHTML = "";
    cart.forEach(productos => {

        cartHTML += `<tr>
                        <th scope="row">${productos.name}</th>
                        <td>${productos.price.toFixed(2)} €</td>
                        <td>${productos.quantity}</td>
                        <td>${(productos.price * productos.quantity).toFixed(2)} ${subtotalWithDiscount != undefined? `${subtotalWithDiscount}` : "" } €</td>
                    </tr>`;
    })
    document.getElementById("cart_list").innerHTML = cartHTML;

    calculateTotal();  
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}


function exitCart() {
    total = 0;
}


window.buy = buy;
window.cleanCart = cleanCart;
window.open_modal = open_modal;


