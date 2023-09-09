var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.myResultDisplay = function () {
        console.log("userName:".concat(this.userName, ",age:").concat(this.age));
    };
    return User;
}());
var user1 = new User("Jonaeath Hosssin", 23);
user1.myResultDisplay();
var user2 = new User("Manha", 1.7);
user2.myResultDisplay();
