// Common functionality across all pages
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on all pages
    const cartCountElements = document.querySelectorAll('#cart-count');
    if (cartCountElements.length > 0) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElements.forEach(el => {
            el.textContent = cart.length;
        });
    }
    
    // You can add more common functionality here
});
