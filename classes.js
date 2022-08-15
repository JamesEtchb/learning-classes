class Human {
  name = ''
  constructor(name) {
    this.name = name
  }
  sayHi() {
    return `Hello my name is ${this.name}!`
  }
  speak(msg) {
    return `${this.name} says: ${msg}`
  }
}

class Teacher extends Human {
  currentlyTeaching = 'yes'
  sayHi() {
    return `Hello I am the teacher and my name is ${this.name}`
  }
}

class Student extends Human {
  grade = 100
}

let stud1 = new Student('Bobby')
let teacher = new Teacher('Jennifer')

console.log(stud1.name)
console.log(stud1.grade)
console.log(teacher.sayHi())
console.log(stud1.sayHi())
