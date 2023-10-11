// function declaration

function greet() {
  console.log("hello there");
}
greet();

// function expression

const speak = function () {
  console.log("good day");
};

speak();

// argument and parametres

const speak1 = function (name, lastName = "aksoy") {
  console.log(name + " " + lastName);
};

speak1("ali");

const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

const area = calcArea(2);
console.log(area);

// arrow funtion

const calcArea1 = (area) => 3.14 * area ** 2;
const result = calcArea1(2);
console.log(result);

// functions

const greet2 = () => "hello";
let resultOne = greet2();
console.log(resultOne);

// methods

let name = "ali";

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callBack funtions && forEach

const myFunc = (cb) => {
  let value = 50;
  cb(value);
};

myFunc((value) => {
  console.log(value);
});

let people = ["ali", "beyda", "ayse", "feyza"];

people.forEach(function (person, index, arr) {
  console.log(person, index);
  console.log(arr);
});

const ul = document.querySelector(".people");

let html = ``;
people.forEach(function (person) {
  html += `<li style="color:purple">${person}</li>`;
});

ul.innerHTML = html;
