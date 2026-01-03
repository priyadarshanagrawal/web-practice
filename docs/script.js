let cart = [];
let cartCount = 0;

function addToCart(productName) {
    cart.push(productName);
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert(productName + " added to cart!");
}

// Optional: Log cart in console
function viewCart() {
    console.log(cart);
}
