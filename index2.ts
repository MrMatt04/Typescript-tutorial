let myName: string = "Bob"
let numberofWheels: number = 4
let isStunden: boolean = false

type Address = {
    street: string,
    city: string,
    country: string
}

type Food = string
let favoritefood: Food ="pizza"

type Person = {name: string, 
    age: number,
    isStunden: boolean,
    address: Address,
   }

let person1: Person = {
    name: 'joe',
    age: 42,
    isStunden: true,
    address: {
        street: "123 fake st",
        city: "springfield",
        country: "USA",
    
    }
}

let person2: Person = {
    name: "jill",
    age: 66,
    isStunden: false,
    address: {  
        street: "123 fake st",
        city: "springfield",
        country: "USA",
    }
}