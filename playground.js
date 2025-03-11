function fibNumber(number) {
  let array = [0, 1];
  for (let i = 0; i < number; i++) {
    let newValue = array[i] + array[i + 1];
    array.push(newValue);
  }
  return array[number];
}

function rotateArray(array, n) {
  let elementToMove = array.slice(0, n);
  let newStartingPoint = array.slice(n);
  return [...newStartingPoint, ...elementToMove];
}
let myArray = [1, 2, 3, 4, 5];

function isPrimeNumber(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
    if (count > 2) break;
  }

  return count == 2 ? true : false;
}

const randomArrayNumber = [1, 3123, 5, 123, 6, 78, 34, 245];

function sortNumber(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// ========= PLAYGROUNDDD HELL YEAHHH =================

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const bara = new Person("Bara", 22, "Male");
const yosa = new Person("Yosa", 21, "Male");

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const car1 = new Car("Mazda", "3 HatchBack", 2022, bara);
const car2 = new Car("BMW", "M4", 2020, yosa);

console.log(bara);
console.log(yosa);
console.log(car1);
console.log(car2.owner.name);
