/*
    first function will make an object with
        A type property with a value of "wood block"
        A length property with a value of 10
        A material property with a value of "pine"
        A purpose property with a value of "flute"

    then return a string using those values in the second function
    "The *10*-inch, *pine* *woodblock* was carved into a wooden *flute*"
    ** = variable 
*/

const createWoodBlock = () => {
    // Return an object with 4 properties.
    const newBlock = {
        type: "wood block",
        length: "10",
        material: "pine",
        purpose: "flute"
    }

    return newBlock;
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringCarving = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`;

    return stringCarving;
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString);