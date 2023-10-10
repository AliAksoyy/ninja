// for loop

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
