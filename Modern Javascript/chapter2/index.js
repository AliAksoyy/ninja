// for loop

const { textSpanIntersectsWith } = require("typescript");

for (let i = 0; i < 5; i++) {
  console.log(i);
}
let a = "";
const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

//  while loops

let names2 = ["shaun", "mario", "luigi"];
while (names2.length < 7) {
  console.log("object");
  names2.length++;
}

// do while loops

let i = 3;
do {
  {
    console.log(i);
    i++;
  }
} while (i < 5);

// if statements

const age2 = 25;

if (age2 > 20) {
  console.log("you are over 20 yeas old");
}
const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if (ninjas.length > 3) {
  console.log("that's is a lot of ninjas");
}

const password = "pass";
if (password.length > 8) {
  console.log("thas password is long enough");
} else {
  console.log("password is not long enough");
}

let user = false;

if (!user) {
  console.log("wrong");
}

let scores1 = [50, 0, 25, 300, 100, 20, 10];

for (let i = 0; i < scores1.length; i++) {
  if (!scores1[i]) {
    const index = scores1.indexOf(scores1[i]);
    console.log(index);
    if (index !== -1) {
      scores1.splice(index, 1);
    }
  }
}
console.log(scores1);

//break and contuine

let scores2 = [50, 0, 25, 100, 20, 10];

for (let i = 0; i < scores2.length; i++) {
  if (scores2[i] === 0) {
    continue;
  }
  console.log(scores2[i]);
  if (scores2[i] === 100) {
    console.log("congrat");
    break;
  }
}

//  swtich statement

const grade = "D";

if (grade === "A") {
} else if (grade === "B") {
} else if (grade === "C") {
} else {
}

switch (grade) {
  case "A": {
    console.log("object");
    break;
  }
  case "B": {
    break;
  }
  case "C": {
    break;
  }
  default: {
  }
}

// variables & block scope


