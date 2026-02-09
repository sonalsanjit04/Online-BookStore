// assume we have an array of cart items
const cartItems = [
    { id: 1, title: "Book 1", quantity: 2, price: 19.99 },
    { id: 2, title: "Book 2", quantity: 1, price: 14.99 },
    { id: 3, title: "Book 3", quantity: 3, price: 24.99 }
];

// function to render cart items
function renderCartItems() {
    const cartItemsHTML = cartItems.map((item) => {
        return `
            <tr>
                <td>${item.title}</td>
                <td>${item.quantity}</td>
                <td>$${item.price}</td>
                <td>$${item.quantity * item.price}</td>
                <td><button class="remove-btn">Remove</button></td>
            </tr>
        `;
    }).join("");
    document.getElementById("cart-items").innerHTML = cartItemsHTML;
}

// function to update total price
function updateTotalPrice() {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

// render cart items and update total price
renderCartItems();
updateTotalPrice();

// add event listener to remove button
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const itemId = e.target.parentNode.parentNode.querySelector("td:first-child").textContent;
        const index = cartItems.findIndex((item) => item.id === parseInt(itemId));
        if (index!== -1) {
            cartItems.splice