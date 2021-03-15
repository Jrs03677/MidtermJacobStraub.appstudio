
let myAnimals = ['dog', 'cat', 'horse', 'meerkat']

userAnimal = prompt('Name an animal')

userAnimal = userAnimal.toLowerCase()

myAnimals.push(userAnimal)

userAnimal2 = prompt('Name another animal')

userAnimal2 = userAnimal2.toLowerCase()

myAnimals.push(userAnimal2)

console.log(myAnimals)

alert(`The last animals are ${myAnimals[myAnimals.length-1]} and ${myAnimals[myAnimals.length-2]}`)
