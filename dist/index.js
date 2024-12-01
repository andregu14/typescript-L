"use strict";
const menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
let nextOrderId = 1;
let cashInRegister = 100;
const orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        throw new Error(`Order id:${orderId} does not exist`);
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof (identifier) === "string") {
        const pizza = menu.find((pizza) => pizza.name === identifier);
        return pizza;
    }
    if (typeof (identifier) === "number") {
        const pizza = menu.find((pizza) => pizza.id === identifier);
        return pizza;
    }
    else {
        throw new Error(`${identifier} does not exist`);
    }
}
addNewPizza({ id: 5, name: "Chicken", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 12 });
placeOrder("Chicken");
placeOrder("Hawaiian");
getPizzaDetail("Chicken");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order Queue:", orderQueue);
//# sourceMappingURL=index.js.map