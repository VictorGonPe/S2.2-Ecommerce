import { products } from "./products.js";

var cart = [];
var count = 0
var total = 0;
//var subtotalWithDiscount;

document.getElementById("total_price").innerHTML = 0;

document.getElementById("cart_list").addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        let productId = event.target.getAttribute("data-id");
        removeFromCart(parseInt(productId));
    }
});


let close = document.querySelector(".btn-close");
close.addEventListener("click", exitCart);

// Exercise 1
function buy(id) {

    const productFoundInArray = products.find(items => items.id === id);

    const productsInCart = cart.find(items => items.id === id);

    if (!productsInCart) {
        cart.push({ ...productFoundInArray, quantity: 1 });
    } else {
        productsInCart.quantity++;
    }
    document.getElementById("count_product").textContent = ++count;

}

// Exercise 2
function cleanCart() {

    cart = [];
    count = total = 0;

    document.getElementById("count_product").textContent = 0;
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("total_price").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
    total = 0;

    cart.forEach(productos => {
        if (productos.hasOwnProperty("offer") && productos.quantity >= productos.offer.number) {
            applyPromotionsCart(productos);
        } else {
            delete productos.subtotalWithDiscount;
            total = total + (productos.price * productos.quantity);
        }
    })
    document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart(item) {

    if (item.quantity >= item.offer.number) {
        let discount = item.price * (item.offer.percent / 100);
        item.subtotalWithDiscount = (item.price - discount) * item.quantity;

        total = total + item.subtotalWithDiscount;

    } else {
        delete item.subtotalWithDiscount;
    }

}

// Exercise 5
function printCart() {
    calculateTotal();
    let cartHTML = "";
    cart.forEach(productos => {
        cartHTML += `<tr>
                        <th scope="row">${productos.name}</th>
                        <td>${productos.price.toFixed(2)} €</td>
                        <td>${productos.quantity} 
                            <button class="btn btn-danger btn-sm remove-btn" data-id="${productos.id}"><span></span>-</button>
                        </td>
                        <td>${(productos.price * productos.quantity).toFixed(2)} ${productos.subtotalWithDiscount !== undefined ? `(${productos.subtotalWithDiscount.toFixed(2)})` : ""} €</td>
                    </tr>`;
    })
    document.getElementById("cart_list").innerHTML = cartHTML;

}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    const productIndex = cart.findIndex(products => products.id === id);

    if (cart[productIndex].quantity > 1) {
        cart[productIndex].quantity--;
    } else {
        cart.splice(productIndex, 1);
    }

    count--;
    document.getElementById("count_product").textContent = count;

    printCart();
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


