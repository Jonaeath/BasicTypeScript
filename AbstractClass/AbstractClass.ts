// Before parent of inheritance use abstract,then it will be abstract class 
abstract class User{
    userName: string;
    age: number;
  
    constructor(userName: string, age: number){
      this.userName = userName;
      this.age = age;
    }
    // There are no body on abstract method that's why we delete body
   abstract myResultDisplay():void ;
  }
  
  // This is child class for extends 
  class Student extends User{
      studentId: number;
  
      constructor(userName: string, age: number, studentId: number){
          super(userName, age)
          this.studentId = studentId;
      }
      myResultDisplay():void{
        console.log(`userName:${this.userName},age:${this.age}`)
      }
  }
  
  