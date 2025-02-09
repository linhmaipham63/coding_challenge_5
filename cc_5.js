// Task 1: Object Properties

// Declare object customer
let customer = {name: "John Doe", age: 35, email: "john.doe@email.com"};

// Log each property 
console.log(`Customer name: ${customer.name}`);
console.log(`Customer age: ${customer.age}`);
console.log(`Customer email: ${customer.email}`);


// Task 2: Object Methods

// Declare object order
let order = {
    orderId: 12345, 
    totalAmount: 150, 
    status: "Processing",
    displayOrder: function() { // Add method displayOrder() to log the order details
        console.log(`Order ID: ${this.orderId} - Total Amount: $${this.totalAmount} - Order Status: ${this.status}`);
    }
};        

// Call the method and log the details
order.displayOrder();


// Task 3: Array Manipulation (push, pop, shift, unshift)

// Declare array cartItems with three product names
let cartItems = ['Ice cream', 'Chocolate', 'Candy'];

// Add a new product to the cart using .push()
cartItems.push('Milk');

// Remove the last item using .pop()
cartItems.pop();

// Add an item at the beginning using .unshift()
cartItems.unshift('Cake');

// Remove the first item using .shift()
cartItems.shift();

// Log the final array to the console
console.log("Updated array:", cartItems);


// Task 4: Map Method

// Declare array prices
let prices = [100, 200, 300];

// Use the .map() method to apply a 10% discount to each price
let discountedPrice = prices.map(num => num*0.9);

// Log the new discounted prices to the console
console.log("Discounted Prices:", discountedPrice); 

