// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

// Menu Toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');  
    navlist.classList.toggle('open');  
};

// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Read More Functionality
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        // Check if the clicked element is not the "Read More" link or its parent
        if (!event.target.closest('.read')) {
            // Hide all additional content
            document.querySelectorAll('.additional-content').forEach(function (content) {
                content.style.display = 'none';
            });
        }
    });

    // Toggle visibility of additional content when "Read More" link is clicked
    document.querySelectorAll('.read').forEach(function (readMoreLink) {
        readMoreLink.addEventListener('click', function (event) {
            event.preventDefault();
            var additionalContent = this.nextElementSibling;
            additionalContent.style.display = additionalContent.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// Cart Functionality
let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('totalPrice');
    
    cartItems.innerHTML = cart.map(item => `<p>${item.product} - $${item.price}</p>`).join('');
    totalElement.textContent = `$${totalPrice}`;
}

// Add event listener to add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product'); // Get product name from data attribute
        const price = parseFloat(button.getAttribute('data-price')); // Get price from data attribute
        addToCart(product, price);
        console.log(`${product} added to cart!`);
    });
});

// Community Button Alerts
function showAlert(message) {
    alert(message);
}

// Add event listeners to community buttons
document.addEventListener('DOMContentLoaded', () => {
    const communityButtons = document.querySelectorAll('.btn');

    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent; // Get the button text
            let message;

            // Customize the alert message based on the button clicked
            switch (buttonText) {
                case 'Visit Forums':
                    message = 'You will be redirected to the forums.';
                    break;
                case 'View Events':
                    message = 'Check out our upcoming events!';
                    break;
                case 'Explore Resources':
                    message = 'Access a wealth of resources to enhance your knowledge.';
                    break;
                default:
                    message = 'This feature is coming soon! Stay tuned.';
            }

            showAlert(message);
        });
    });
});


// Fade-In Reveal Animation
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class to trigger fade-in
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    });

    reveals.forEach(reveal => {
        observer.observe(reveal); // Observe each reveal element
    });
});

