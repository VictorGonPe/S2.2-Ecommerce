var subtotalWithDiscount;

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
    discountOneProduct = item.price * item.quantity - discount;
        
    total = total + discountOneProduct;
            //document.querySelector(".finalPrice").textContent += ` (${finalPrice.toFixed(2)} €)`
}