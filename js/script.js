// Get button Elements
let btnKeyboard = document.querySelector('#keyboard');
let btnMouse = document.querySelector('#mouse');
let btnMonitor = document.querySelector('#monitor');
let btnLaptop = document.querySelector('#laptop');
let btnRouter = document.querySelector('#router');

let cartTable = document.querySelector('#cart-table');

let ui = new UI();




// Product Class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    
}


// Define Functions
function newProduct(e) {
    let name = e.srcElement.previousElementSibling.previousElementSibling.textContent;
    let price = e.srcElement.previousElementSibling.textContent;
    // console.log(e.srcElement);
    // console.log(name, price);

    let product = new Product(name, price);

    ui.addToCart(product);

    e.preventDefault();

}

function removeProduct(e) {
    ui.removeFromCart(e.target);
    e.preventDefault();    
}


// Add Event Listener
btnKeyboard.addEventListener('click', newProduct);
btnMouse.addEventListener('click', newProduct);
btnMonitor.addEventListener('click', newProduct);
btnLaptop.addEventListener('click', newProduct);
btnRouter.addEventListener('click', newProduct);

cartTable.addEventListener('click', removeProduct);


// console.log(btnKeyboard.previousElementSibling.textContent);
// console.log(btnKeyboard.previousElementSibling.previousElementSibling.textContent);


