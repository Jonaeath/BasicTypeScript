class User{
    // properties, method, constructor
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
let user1 = new User("Jonaeath Hosssin", 23)
user1.myResultDisplay()

let user2 = new User("Manha", 1.7)
user2.myResultDisplay()


