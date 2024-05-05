document.addEventListener("DOMContentLoaded", function() {
    // Navigation active class toggle
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Cart functionality (ensure this part is included if the page has cart features)
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product-name');
            addToCart(productName);
        });
    });
});

// Cart object to keep track of items
let cart = {};

function addToCart(productName) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
    } else {
        cart[productName] = { quantity: 1 };
    }
    updateCartCount();
    showCart();
}

function updateCartCount() {
    let totalCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if(cartCountElement) {
        cartCountElement.innerText = totalCount;
    }
}

function showCart() {
    let cartContents = Object.entries(cart).map(([productName, productDetails]) => {
        return `${productName}: ${productDetails.quantity}`;
    }).join('\n');
    alert(cartContents);
}

// Contact form submission
function sendFormData() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    $.ajax({
        url: 'submit.php',
        type: 'POST',
        data: formData,
        success: function(response) {
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset();
        },
        error: function() {
            alert('An error occurred.');
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Retrieve cart from local storage or set to empty object
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing cart items

    let total = 0;
    Object.keys(cart).forEach(key => {
        const item = cart[key];
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.quantity} x ${item.name} - $${item.price * item.quantity}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    alert("Proceed to checkout.");
}

