

 



    // Variables
let quantity = 1;
const basePrice =  500.00;
const priceElement = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');

// Add to cart button
const addToCartBtn = document.getElementById('add-to-cart-btn');

// Cart modal control
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');

// Quantity buttons
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');

// Update price based on quantity
function updatePrice() {
    const totalPrice = (quantity * basePrice).toFixed(2);
    priceElement.textContent = totalPrice;
    addToCartBtn.textContent = `Add to cart |  ${totalPrice}`;
}

// Increase quantity
increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
    updatePrice();
});

// Decrease quantity
decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updatePrice();
    }
});

// Add to cart functionality
addToCartBtn.addEventListener('click', () => {
    // Add item to cart
    const cartItem = document.createElement('li');
    cartItem.textContent = `Custom Cake (Qty: ${quantity}) - &#8377; ${(quantity * basePrice).toFixed(2)}`;
    cartItemsElement.appendChild(cartItem);

    // Increase cart count
    let cartCount = parseInt(cartCountElement.textContent);
    cartCount++;
    cartCountElement.textContent = cartCount;

    // Reset quantity and price
    quantity = 1;
    quantityInput.value = 1;
    updatePrice();

    // Show cart modal
    cartModal.classList.remove('hidden');
});

// Close cart modal
closeCartBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});
