const arr = ["apple", "banana", "orange", "banana"];
const arr5 = ["a", "b", "c"];
const arr4 = [1, 2, 3, 4, 5, 6, 7, 2, 5, 3, 6];
const arr3 = [1, [2], [[2], 4]];
const arr2 = ["melon", "cherry"];
const obj = { 0: "apple", 1: "orange", 2: "banana", length: 4 };
let person = {
  name: "John",
  age: 30,
  job: "Developer",
};

const a = arr.values();
console.log(a);

for (const value of a) {
  console.log(value);
}
console.log("at", arr.at(0));
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.pop());
console.log("b", arr.shift());
console.log("c", arr.unshift("ali"));
console.log("c", arr.push("beyda"));
console.log("arr", arr);
console.log("concat", arr.concat(arr2));
console.log(arr.copyWithin(0, 2, 3));
console.log(arr.toString());
console.log(arr.fill("a"));
console.log("aaa", Array.from(obj));
console.log(arr.join(""));
console.log(arr.splice(2, 0, "beyda", "ali"));
console.log(arr);
console.log(arr3.flat(2));
console.log(arr.lastIndexOf("banana"));
console.log(arr.indexOf("banana"));
console.log(Array.of(1, 2, 3));
console.log(arr4.every((item) => item > 2));
console.log(arr4.slice(2, 4));
console.log(arr4.flatMap((item) => [item, item * 2]));
console.log(arr4.findIndex((item) => item > 20));
console.log(arr4.find((item) => item > 3));
console.log(arr4.includes(15));
for (const value in person) {
  console.log(value);
}

const iterator = arr5.entries();
console.log(iterator);
for (const value of iterator) {
  console.log(value);
}
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

console.log(arr4.reduce((acc, cur) => acc + cur, 0));
console.log(
  arr4.reduceRight((pre, cur) => {
    console.log(pre, cur);
    return Math.max(pre, cur);
  })
);
console.log(Array.isArray(arr4));

let ayse = { name: "ali" };

if (typeof ayse === "object" && ayse !== null && !Array.isArray(ayse)) {
  console.log("Değer bir objedir.");
} else {
  console.log("Değer bir obje değildir.");
}

console.log(arr4.filter((item) => item > 3));
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(arr4.map((item) => (item === 1 ? "ali" : item)));
