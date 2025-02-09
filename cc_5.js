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


// Task 5: Filter Method

// Declare array inventory
let inventory = [5, 0, 12, 8, 0]; 

// Use .filter() method to remove products with zero stock
let filteredInventory = inventory.filter(num => num != 0); 

// Log the filtered array
console.log("Filtered Array:", filteredInventory); 


// Task 6: Reduce Method

// Declare array sales 
let sales = [500, 300, 200, 400]; 

// Use the .reduce() method to calculate total revenue
totalRev = sales.reduce((num, sale) => num+sale, 0);

// Log the total revenue
console.log(`Total Revenue: $${totalRev}`); 


// Task 7: find() Method

// Declare array customers 
let customers = ["Alice", "Bob", "Charlie", "David"]; 

// Use the .find() method to locate the customer "Charlie"
foundCustomer = customers.find(name => name === "Charlie");

// Log the result
console.log(foundCustomer);

