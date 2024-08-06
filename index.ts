let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderHistroy: Order[] = [];
let nextPizzaId:number  = 1


const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margherrita", price: 8},
    {id:  nextPizzaId++, name: "Pepperoni", price: 8},
    {id:  nextPizzaId++, name: "Hawaiian", price: 8},
    {id: nextPizzaId++, name: "Veggie", price: 8},
]

type Pizza = {
    id: number,
    name: string,
    price: number,
}
type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}



function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{
    const newPizza: Pizza = { 
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza);
    return newPizza
}

addNewPizza({ name: "Chicken bacon ranch", price: 12})
addNewPizza({ name: "BBQ Chicken", price: 12})
addNewPizza({ name: "Spicy Sausage", price: 11})



function orderPizza(pizzaName: string): Order | undefined{
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza){
        console.error('${pizzaName} does not exist on the menu')
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = {  id : nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderHistroy.push(newOrder)
    return newOrder
}


function completeOrder(orderId: number): Order | undefined{
    const order = orderHistroy.find(order => order.id === orderId)
    if (!order){
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}



export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLocaleLowerCase())
    }else if (typeof identifier === "number"){; 
    return menu.find(pizza => pizza.id === identifier)
} else { throw new TypeError("identifier must be a string or number")}
}



orderPizza("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu", menu)
// console.log("Cash in register", cashInRegister)
// console.log("Order Qeue", orderHistroy)