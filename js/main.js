// strim costuroctor

// 1-methods

// function yangiCostomMethodsQoshish() {
//     String.prototype.trm = function() {
//         return this.trim();
//     }
// }

// let misolUchunStirng = "Yangi Methods";

// console.log(misolUchunStirng.trim());

// yangiCostomMethodsQoshish();




// 2-methods

// function yangiCostomMethodsQoshish() {
//     String.prototype.UpperCase = function() {
//         return this.toUpperCase();
//     }
// }

// let newMethods = "yangi UpperCase methods";
// console.log(newMethods.toLowerCase());

// yangiCostomMethodsQoshish();




// 3-methods

// function yangiCostomMethodsQoshish() {
//     String.prototype.has = function(substring) {
//         return this.includes(substring);
//     }
// }

// yangiCostomMethodsQoshish();

// let yangiMethods = "yangi methods qoshildi";
// console.log(yangiMethods.includes("salom"));



// 4-methods

// function yangiCostomMethodsQoshish() {
//     String.prototype.cut = function(salom, hello) {
//         return this.slice(salom, hello);
//     }
// }

// yangiCostomMethodsQoshish()

// let yanaYangiMethods = ("yangich methods");
// console.log(yanaYangiMethods.cut(2, 7));



// 5-methods

// function yanaYangiMethods() {
//     String.prototype.rpt = function(count) {
//         return this.repeat(count);
//       };
// }

// yanaYangiMethods();

// let exampleString = ("salom dunyo")
// console.log(exampleString.rpt(3));


// number

// 1-misol

// function numberConstuctAdd() {
//     Number.prototype.fixed = function(decimalPlaces) {
//         return this.toFixed(decimalPlaces);
//       };
// }

// numberConstuctAdd();

// let exampleNumber1 = 4.567;
// let exampleNumber2 = 10.102;
// let exampleNumber3 = 16;

// console.log(exampleNumber1.fixed(2)); 
// console.log(exampleNumber2.fixed(1)); 
// console.log(exampleNumber3.fixed(0)); 



// 2-misol

// function numberConstuctAdd() {
//     Number.prototype.round = function() {
//         return Math.round(this);
//       };
// }

// numberConstuctAdd();

// let exampleNumber1 = 20;
// let exampleNumber2 = 40;
// let exampleNumber3 = 16;

// console.log(exampleNumber1.round());
// console.log(exampleNumber2.round());
// console.log(exampleNumber3.round()); 



// 3-misol

// function numberConstuctAdd() {
//     Number.prototype.isSquare = function() {
//         return Math.sqrt(this) % 1 === 0;
//       };
// }

// numberConstuctAdd();

// let exampleNumber1 = 12;
// let exampleNumber2 = -15;
// let exampleNumber3 = 23;

// console.log(exampleNumber1.isSquare());
// console.log(exampleNumber2.isSquare());
// console.log(exampleNumber3.isSquare());


// 4-misol

// function numberConstuctAdd() {
//     Number.prototype.count = function() {
//         return Math.abs(this).toString().length;
//       };
// }

// numberConstuctAdd();

// let exampleNumber1 = 34;
// let exampleNumber2 = 23;
// let exampleNumber3 = 45;

// console.log(exampleNumber1.count());
// console.log(exampleNumber2.count());
// console.log(exampleNumber3.count());


// 5-misol

// function numberConstuctAdd() {
//     Number.prototype.sum = function() {
//         let sum = 0;
//         Math.abs(this).toString().split('').forEach(digit => sum += parseInt(digit));
//         return sum;
//       };
// }

// numberConstuctAdd();

// let exampleNumber1 = 11;
// let exampleNumber2 = 21;
// let exampleNumber3 = 90;

// console.log(exampleNumber1.sum());
// console.log(exampleNumber2.sum());
// console.log(exampleNumber3.sum());


// array

// 1-misol

// function array_CostomAdd() {
//     Array.prototype.customMap = function(callback) {
//         const result = [];
//         for (let i = 0; i < this.length; i++) {
//           result.push(callback(this[i], i, this));
//         }
//         return result;
//       };
// }

// array_CostomAdd();

// let exampleArray = [1, 2, 3, 4, 5];

// console.log(exampleArray.customMap(item => item * 2));



// 2-misol

// function array_CostomAdd(){
//     Array.prototype.customEvery = function(callback) {
//         for (let i = 0; i < this.length; i++) {
//           if (!callback(this[i], i, this)) {
//             return false;
//           }
//         }
//         return true;
//       };
// }

// array_CostomAdd();

// let exampleArray = [1, 3, 5, 7];

// console.log(exampleArray.customEvery(item => item > 0)); 



// 3-misol

// function array_CostomAdd(){
//     Array.prototype.customReduce = function(callback, initialValue) {
//         let accumulator = initialValue !== undefined ? initialValue : this[0];
//         const startIndex = initialValue !== undefined ? 0 : 1;
      
//         for (let i = startIndex; i < this.length; i++) {
//           accumulator = callback(accumulator, this[i], i, this);
//         }
//         return accumulator;
//       };
// }

// array_CostomAdd();

// let exampleArray = [13, 23, 25, 16,]

// console.log(exampleArray.customReduce((acc, curr) => acc + curr, 0)); 



// 4-misol

// function array_CostomAdd() {
//     Array.prototype.customFindIndex = function(callback) {
//         for (let i = 0; i < this.length; i++) {
//           if (callback(this[i], i, this)) {
//             return i;
//           }
//         }
//         return -1;
//       };
// }

// array_CostomAdd()

// let exampleArray = [35, 18, 77, 23, 85];

// console.log(exampleArray.customFindIndex(item => item === 3));
// // console.log(exampleArray);


// 5-misol

// function array_CostomAdd() {
//     Array.prototype.customSplice = function(startIndex, deleteCount, ...items) {
//         const removedItems = this.slice(startIndex, startIndex + deleteCount);
//         const firstPart = this.slice(0, startIndex);
//         const secondPart = this.slice(startIndex + deleteCount);
      
//         this.length = 0;  // Clear the original array
      
//         for (let i = 0; i < firstPart.length; i++) {
//           this.push(firstPart[i]);
//         }
      
//         for (let i = 0; i < items.length; i++) {
//           this.push(items[i]);
//         }
      
//         for (let i = 0; i < secondPart.length; i++) {
//           this.push(secondPart[i]);
//         }
      
//         return removedItems;
//       };
// }

// array_CostomAdd()

// let exampleArray = [11, 99, 33, 55, 77];

// console.log(exampleArray.customSplice(1, 2, 10, 11, 12)); 
// console.log(exampleArray);


// animal

// function Animal(name, speed, limitAge) {
//     this.name = name;
//     this.speed = speed;
//     this.limitAge = limitAge;
//   }
  
  
//   Animal.prototype.info = function() {
//     return `Name: ${this.name}, Speed: ${this.speed}, Limit Age: ${this.limitAge}`;
//   };
  
  
//   let lion = new Animal("Lion", 50, 15);
//   console.log(lion.info());
  
//   let cheetah = new Animal("Cheetah", 75, 10);
//   console.log(cheetah.info());  


// student

// function Student(name, course, years, university) {
//     this.name = name;
//     this.course = course;
//     this.years = years;
//     this.university = university;
//   }
  
//   Student.prototype.leftYears = function() {
//     return this.years > this.course ? this.years - this.course : 0;
//   };
  
//   let student1 = new Student("John Doe", 2, 4, "Example University");
//   console.log(student1.leftYears());  
  
//   let student2 = new Student("Jane Doe", 3, 1, "Another University");
//   console.log(student2.leftYears());  
  
  

// person

// function Person(name, age, currentYear) {
//     this.name = name;
//     this.age = age;
//     this.currentYear = currentYear;
//   }
  
//   Person.prototype.getBirthYear = function() {
//     return this.currentYear - this.age;
//   };
  
//   let person1 = new Person("John Doe", 25, 2024);
//   console.log(person1.getBirthYear());  
  
//   let person2 = new Person("Jane Doe", 30, 2024);
//   console.log(person2.getBirthYear());  
  


// rectanle

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//   }
  
//   Rectangle.prototype.getArea = function() {
//     return this.width * this.height;
//   };
  
//   Rectangle.prototype.getPerimeter = function() {
//     return 2 * (this.width + this.height);
//   };
  
//   let rectangle1 = new Rectangle(5, 8);
//   console.log(rectangle1.getArea());       
//   console.log(rectangle1.getPerimeter());  
  
//   let rectangle2 = new Rectangle(10, 20);
//   console.log(rectangle2.getArea());      
//   console.log(rectangle2.getPerimeter());  
  


// eploye

function Employee(name, salary, workName) {
    this.name = name;
    this.salary = salary;
    this.workName = workName;
  }
  
  Employee.prototype.increaseSalary = function(percent) {
    const increaseAmount = (this.salary * percent) / 100;
    return this.salary + increaseAmount;
  };
  
  let employee1 = new Employee("John Doe", 50000, "Developer");
  console.log(employee1.increaseSalary(10));  
  
  let employee2 = new Employee("Jane Doe", 60000, "Manager");
  console.log(employee2.increaseSalary(15));  
  