// string

let email = "mario@thenetninja.co.uk";
let firstName = "Brandon";
let lastName = "Sanderson";
let fullName = firstName + " " + lastName;

console.log(fullName.length);
console.log(fullName.toUpperCase());

let index = email.indexOf("@");
console.log(index);

// common string methods

let email1 = "mario@thenetninja.co.uk";

let result = email1.lastIndexOf("n");

console.log(result);
console.log(email1.slice(0));
console.log(email1.substring(2, 6));
console.log(email1.replace("mario", ""));

let radius = 10;
const pi = 3.14;

console.log(Math.LOG10E);
console.log(radius % 9);

// order of operation B I D M A S

console.log(5 * (10 - 3) ** 2);

let likes = 10;
likes = likes + 1;
likes++;
++likes;
likes += 10;
likes -= 2;
likes *= 3;
console.log(likes);

// NaN - Not a Number
console.log(5 / "hello");
console.log(isNaN("ali"));

// template strings

let title = "Best reads of 2019";
let author = "Mario";
let likess = 30;

// concatenation way

console.log(
  "The blog called " + title + " by " + author + " has " + likess + "likes"
);

// template string way

console.log(`The blog called ${title} by ${author} has ${likess} likes`);

//creating html tempaltes
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This has ${likes}</span>
`;
console.log(html);

// array

let ninjas = ["shaun", "ryu", "chun-li"];

console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = "ali";
console.log(ninjas);

let ages = [20, 25, 30, 35];
ages.forEach((a) => console.log(a));

let setId = setInterval(() => {
  let random = Math.round(Math.random() * 3);
  console.log(ages[random]);
  clearInterval(setId);
}, 1000);

// array methods
console.log(ninjas);
console.log(ninjas.join("@"));
console.log(ninjas.indexOf("chun-li"));
console.log(ninjas.concat("ss", "dd"));
console.log(ninjas.push("ss"));
console.log(ninjas.pop());
console.log(ninjas.push({}));

console.log(ninjas);

//null undefined

let age;
console.log(age);

let age1 = null;

console.log(+null == "");

//Boolean

console.log(true, false);
console.log(Boolean(0));
console.log(Boolean(+null + 1));
console.log(Boolean(NaN));

let email2 = "luigi@thenetninja.co.uk";
let names = ["mario", "luigi", "toad"];
console.log(email2.includes("@"));
console.log(names.includes("luigi"));

// loose comparison
// comparison operators

let age2 = 25;
console.log(age2 == 25);
console.log(age2 >= 25);

let name1 = "shaun";

console.log(name1 == "Shaun");
console.log(name1 > "haun"); // küçük harfler büyük harflerden daha büyük

// strict comparison (different types cannot be equal) değer attı tip kontrolü yapar

console.log(!!null);
console.log(!!undefined);

// type convertion

let scoress = "100";

console.log(Number(scoress) + 1);

let name2 = "hello";

console.log(Number(name2));

let number = String(50);
let a = new String(60);
console.log(typeof a); // Object
console.log(number);
