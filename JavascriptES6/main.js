const pi = 3.14;

function calcArea(val) {
  const pi = 10;
  console.log(val * val * pi);
}

calcArea(5);

var x = 10;
if (x > 5) {
  let x = 5;
  console.log("inside", x);
}
console.log("outside", x);

const items = document.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
  items[i].onclick = (e) => {
    console.log(i);
  };
}

function log(num = "ali") {
  console.log(num);
}

log();

const meats = ["ham", "salami", "bacon"];

const number = [1, 2, 3];

const mixArr = [...meats, ...number];
console.log(mixArr);
// console.log(mixArr.flat());

function addNums(a, b, c) {
  console.log(a + b + c);
}

addNums(...number);

// string methods

let str = "graaaaavy";
let str1 = "goodbye";
let test = "My name is Ryu";

console.log(str.repeat(3));
console.log(str1.startsWith("good"));
console.log(str1.endsWith("good", 4));
console.log(str1);
console.log(test.includes("My"));
console.log(test.indexOf(" ", 8));

let name = "ali";
let belt = "Black";
const name1 = "name";

let obj = {
  name,
  belt,
  chop(a) {
    console.log("object" + " " + a);
  },
};

console.log(obj[name1]);
obj.chop("ali");

// arrow functions

const ninjaGreeting = () => {
  console.log("ninjaGreeting");
};
ninjaGreeting();

const ninja = {
  name: "ninja",
  chop(x) {
    let _this = this;

    setInterval(() => {
      if (x > 0) {
        console.log(this.name);
        x--;
      }
    }, 1000);
  },
};

ninja.chop(10);

let names = new Set();

names.add("Shaun");
names.add("Ali").add("Beyda").add("Beyda");
names.delete("Beyda");
// names.clear();
console.log(names.has("Ali"));
console.log(names.size);

console.log(names);

let ninjas = ["shaun", "ali", "beyda", "ali", "feyza", "beyda"];

const beyda = new Set(ninjas);
console.log(beyda);

ninjas = [...beyda];
console.log(ninjas);

// generator

function* ali() {
  console.log("object");
  console.log("object1");
  console.log("object2");
}
const beyda1 = ali();
console.log(beyda1);
