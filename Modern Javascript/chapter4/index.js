// object literal

const blogs = [
  {
    title: "ali",
    likes: 30,
  },
  {
    title: "beyda",
    likes: 4,
  },
];

const user = {
  name: "ali",
  age: 30,
  email: "ali@example.com",
  location: "kırıkkale",
  blogs: [
    {
      title: "ali",
      likes: 30,
    },
    {
      title: "beyda",
      likes: 4,
    },
  ],
  login: function (user) {
    console.log("the user logged in" + " " + user);
  },
  logout: function () {
    console.log("user logout");
  },
  logBlogs: function () {
    this.blogs.forEach(function (item) {
      console.log(item.title);
      console.log(item.likes);
    });
  },
};
user.name = "alii";
user.a = 5;
console.log(user.name);
console.log(user["email"]); // square bracet

user["ali"] = "ali";
console.log(user);

const key = "location";

console.log(user[key]);

user.login("beyda");

user.logout();

user.logBlogs();

console.log(user);

// Math Object

console.log(Math);

const random = Math.trunc(Math.random() * 100);
console.log(random);

// primite valaues

let scoreOne = 50;

let scoreTwo = scoreOne;

scoreOne = 100;

console.log(scoreOne);
console.log(scoreTwo);

// referenca values

let obj1 = { name: "ali", age: 30 };

let obj2 = obj1;

obj2.ali = "s";


obj1.age = 35;

console.log(obj1);
console.log(obj2);
