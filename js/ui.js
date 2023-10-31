// Define UI Class
class UI {
    constructor() {

    }

    addToCart(product) {
        // console.log(product);
        let cart = document.querySelector('#cart-table');
        let cartProductRow = document.createElement('tr');

        // console.log(cart);

        cartProductRow.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button class="remove-button">Remove</button></td>
        `;

        cart.appendChild(cartProductRow);
    }

    removeFromCart(element) {
        // console.log('Remove Clicked');
        if (element.classList.contains("remove-button")) {
            // The element has the class
            //console.log(element.parentElement.parentElement);
            element.parentElement.parentElement.remove();
        }
    }
}