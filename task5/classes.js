// Task 1 - Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
class Animal {
    constructor(name){
        this.name=name;
     }
    move(){
        console.log(`${this.name} is moving`);
    }
}
class Cat extends Animal {
    command() {
        console.log(`${this.name} gives a paw!`);
      }
}

const bengal = new Cat("Bengal Cat");

bengal.move();
bengal.command();
