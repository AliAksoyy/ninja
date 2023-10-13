console.log(1);
console.log(2);
setTimeout(() => {
  console.log("callback");
}, 0);
console.log(3);
console.log(4);

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
