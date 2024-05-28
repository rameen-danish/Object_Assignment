#! /usr/bin/env node
//                                 ***Object Assignment***
console.log("\n \t \t \t ***OBJECT ASSIGNMENT*** ");
/*Part 1: Employee Data
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if
any).*/
console.log("\n \t \t///***PART1 : Employee Data***///");
let employee = {
    name: "Rameen",
    department: "GIAIC department",
    role: "Student",
    contact: {
        phone: 123456789,
        email: "rameenrashid15@gmail.com"
    },
    skills: ["JavaScript", "HTML", "CSS"]
};
console.log(employee); //print the employee object
/*Part 2: Car Details
Challenge:
1. Design a type alias named Car to represent a car object.
2. Include a nested object named engine within Car, containing a property named
horsepower (number).
3. Define a function named getHorsepower directly within the Car type alias to retrieve the
engine's horsepower.*/
console.log("\n \t \t///***PART2 : Car Details***///");
let myCar = {
    name: "Honda Civic",
    model: "Standard",
    year: 2024,
    color: "Black",
    engine: {
        horsePower: 176,
    },
    getHorsePower: () => {
        console.log(`${myCar.name} car speed is ${myCar.engine.horsePower} hp`);
    }
};
myCar.getHorsePower(); //calling car object function
console.log(myCar);
/*Part 3: Colorful T-Shirts
Challenge:
1. Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object
should have two properties:
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function
accepts a new color string as an argument. When called, it should:
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g.,
increase by 10% for red, decrease by 5% for blue)*/
console.log("\n \t \t///***PART3 : Colourful T-Shirts***///");
let shirt = {
    name: "POLO T-Shirt",
    price: 2000,
    color: "black",
    inventory: {
        stock: 100,
        colorOptions: ["red", "blue", "white"],
        changeColor: (newColor) => {
            shirt.color = newColor;
            shirt.price = 2000;
            switch (newColor) {
                case "red":
                    shirt.price *= 1.1; //Increase 10% for red colour
                    break;
                case "blue":
                    shirt.price *= 0.95; //Decrease 5% for blue colour
                    break;
                default:
                    break;
            }
            ;
        }
    }
};
console.log(shirt);
shirt.inventory.changeColor("red"); //function calling for red color
console.log("\n \t For Red color T-shirt price increase by 10% \n", shirt);
shirt.inventory.changeColor("blue"); //function calling for blue color
console.log("\n \t For Blue color T-shirt price decrease by 5%", shirt);
export {};
