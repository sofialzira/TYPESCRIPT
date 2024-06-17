// exercicio 1 

// Create a interface called IPerson with the following properties:
// name (string): representing the person's name
// age (number): representing the person's age
// address (string): representing the person's address
// Write a function called updatePersonName that takes in a person object (of type Person) 
// and a newName string. The function should create a new object with the same properties as 
// the original person object, except the name property should be updated with the newName value. 
// The original person object should remain unchanged.

interface IPerson {
    name: string,
    age: number,
    address: string,
}

const person: IPerson = {
    name: "sofia",
    age: 30,
    address: "porto, Portugal",
}

function updateName(person: IPerson, newName: string): IPerson {
    return {
        ...person,
        name: newName
    }
}

const updatedPerson = updateName(person, "marcus");

console.log(person)
console.log(updatedPerson)

// exercicio 2

// Write a function called calculateArea that takes in two parameters:
// shape (string) and dimensions (number[]). The shape parameter represents the shape type,
//  which can be either "rectangle" or "circle". The dimensions parameter represents the 
//  dimensions of the shape. For a rectangle, the dimensions array should contain two 
//  numbers representing the length and width. For a circle, the dimensions array should 
//  contain one number representing the radius. The function should calculate and return the 
//  area of the shape based on the provided dimensions.





type Shape = "rectangle" | "circle";

function calcArea(shape: Shape, dimensions: number[]): number {

  if (shape === 'rectangle' && dimensions.length === 2) {
    const [width, height] = dimensions;

    return width * height;
  } else if (shape === 'circle' && dimensions.length === 1) {
    const [radius] = dimensions;

    return Math.PI * Math.pow(radius, 2)
  } else {
    throw new Error('Invalid shape or dimensions.')
  }
}

console.log(calcArea("circle", [5]));
console.log(calcArea("rectangle", [5, 4]))

