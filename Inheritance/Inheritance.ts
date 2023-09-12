// Here Class User is Parent Class
class User{
  userName: string;
  age: number;

  constructor(userName: string, age: number){
    this.userName = userName;
    this.age = age;
  }
  myResultDisplay(){
    console.log(`userName:${this.userName},age:${this.age}`)
  }
}

// This is child class for extends 
class Student extends User{
    studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age)
        this.studentId = studentId;
    }
    myResultDisplay(){
        console.log(`userName:${this.userName},age:${this.age}, studentId = ${this.studentId}`)
      }
}

let student1 = new Student('jonaeath', 33, 100000)
student1.myResultDisplay();