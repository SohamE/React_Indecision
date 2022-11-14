class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi! ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = "Undecided") {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let desc = super.getDescription();

    if (this.hasMajor()) {
      desc += ` Their major is ${this.major}`;
    }

    return desc;
  }
}

const me = new Person("test", 5);
const noOne = new Student();
console.log(me.getDescription());
console.log(noOne.getDescription());
