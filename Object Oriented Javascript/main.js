const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a);
a.__proto__.ali = function () {
  console.log("object");
};

a.ali();
console.log(window);

const userOne = {
  email: "ryu@ninjas.com",
  name: "Ryu",
  login() {
    console.log(this.email);
  },
  logout() {
    console.log(this.email + " logout");
  },
};

userOne.logout();

userOne.name = "ali";

userOne.ali = function (a) {
  return "ali " + a;
};

const b = userOne.ali("ali");
console.log(b);

console.log(userOne);

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = 0;
    this.ali = function () {
      console.log("heree");
    };
  }
  login() {
    console.log(this.email + " login");
  }
  logout() {
    console.log(this.email + " logout");
  }
  updateScore = function () {
    this.score++;
    console.log(this.score + " object");
  };
}

const userOne1 = new User("ali", "ali@ali", 30);
const userTwo = new User("beyda", "beyda@beyda", 4);
const userThree = new User("feyza", "feyza@feyza", 28);

console.log(userOne1);
userOne1.login();
console.log(userTwo);
userTwo.logout();
console.log(userThree);
userThree.login();

userOne1.updateScore();
userOne1.updateScore();
userOne1.updateScore();

class Ali {
  constructor() {
    this.a = false;
    console.log(this);
  }
}

let aaa = new Ali();
console.log(aaa);

class Admin extends User {
  constructor(email, name, age, score) {
    super(email, name, age, score);
    this.isAdmin = false;
  }
  delete(user) {
    users = users.filter((u) => u.email !== user.email);
  }
}

let users = [userOne1, userTwo];

const admin = new Admin("ali", "ali@ali", 30, 0);

admin.delete(userOne1);

console.log(admin);

function User1(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.isLogin = false;
  this.fullName = function () {
    return this.email + " " + this.name;
  };
}

const newuser1 = new User1("ali", "ali@ali", 30);
const newuser2 = new User1("feyza", "feyza@feyza", 28);

User1.prototype.login1 = function () {
  this.isLogin = true;
  console.log(this.email);
};

console.log(newuser1);
console.log(newuser2);
console.log(newuser2.fullName());
newuser1.__proto__.aliss = function () {
  console.log("hello");
};
console.log(newuser1);
newuser1.aliss();
newuser1.login1();

function Admin1(...args) {
  User1.apply(this, args);
}

const admin1 = new Admin1("ayse", "ayse@ayse", 32);
console.log(admin1);
console.log(admin1.fullName());

Admin1.prototype = Object.create(User1.prototype);
console.log(admin1);
