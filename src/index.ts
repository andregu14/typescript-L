type PizzaObj = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: PizzaObj;
  status: "ordered" | "completed";
};

let nextOrderId = 1;
let cashInRegister = 100;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: PizzaObj[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<PizzaObj, "id">): PizzaObj {
  const pizza: PizzaObj = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(pizza);
  return pizza;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    throw new Error(`Order id:${orderId} does not exist`);
  }
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): PizzaObj | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      `Identifier:${identifier} must be a string or a number`
    );
  }
}

addNewPizza({ name: "Chicken", price: 18 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 10 });

// placeOrder("Chicken");
// placeOrder("Hawaiian");

// getPizzaDetail("Chicken");

// completeOrder(1);

console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order Queue:", orderQueue);
