// Base class (Encapsulation)
class Animal {
  constructor(name, species) {
    this._name = name; // Private property
    this._species = species; // Private property
  }

  // Getter method for name
  getName() {
    return this._name;
  }

  // Setter method for name
  setName(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Invalid name!");
    }
  }

  // Method to display info
  displayInfo() {
    console.log(`This is a ${this._species} named ${this._name}.`);
  }
}

// Derived class (Inheritance)
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this._name} is barking! Woof Woof!`);
  }
}

// Another derived class (Inheritance)
class Cat extends Animal {
  constructor(name, color) {
    super(name, "Cat"); // Call parent constructor
    this.color = color;
  }

  meow() {
    console.log(`${this._name} is meowing! Meow Meow!`);
  }
}

// Usage
const myDog = new Dog("Buddy", "Labrador");
myDog.displayInfo();  // This is a Dog named Buddy.
myDog.bark();         // Buddy is barking! Woof Woof!

const myCat = new Cat("Whiskers", "Gray");
myCat.displayInfo();  // This is a Cat named Whiskers.
myCat.meow();         // Whiskers is meowing! Meow Meow!

// Using Encapsulation (Setter & Getter)
myDog.setName("Max");
console.log(myDog.getName()); // Max
