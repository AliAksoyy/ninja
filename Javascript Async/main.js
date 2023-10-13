// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log("callback");
// }, 0);
// console.log(3);
// console.log(4);

// const getTodos = (cb) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.status === 200 && request.readyState === 4) {
//       const data = JSON.parse(request.responseText);

//       cb(undefined, data, (item) => {
//         return item;
//       });
//     } else if (request.readyState === 4) {
//       cb("Could't fetch data", undefined);
//     }
//   });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   request.send();
// };

// getTodos((err, data, b) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   console.log(b("beyda"));
// });

// console.log(5);
// console.log(6);

// //local'den veri çekme

// const localGetTodos = (resource, cb) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.status === 200 && request.readyState === 4) {
//       const data = JSON.parse(request.responseText);
//       cb(undefined, data);
//     } else if (request.readyState === 4) {
//       cb("hata var", undefined);
//     }
//   });

//   request.open("GET", resource);
//   request.send();
// };

// localGetTodos("todos/todos.json", (err, data) => {
//   console.log("data", data);
//   localGetTodos("todos/todos1.json", (err, data) => {
//     console.log("data1", data);
//   });
//   localGetTodos("todos/todos2.json", (err, data) => {
//     console.log("data2", data);
//   });
// });

// // promise

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     // resolve("some data");
//     reject("some error");
//   });
// };

// getSomething()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const getTodosPromise = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.status === 200 && request.readyState === 4) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("something went wrong");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodosPromise("todos/todos.json")
//   .then((data) => {
//     console.log(data);
//     return getTodosPromise("todos/todos1.json").then((data) => {
//       console.log(data);
//       return getTodosPromise("todos/todos2.json").then((data) => {
//         console.log(data);
//       });
//     });
//   })
//   .catch((err) => console.log(err));

// // xhr post example

// // fetch api post

// const url2 = "https://jsonplaceholder.typicode.com/todos";

// let data2 = { title: "beyda", completed: false };

// const ali = fetch(url2, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data2),
// });
// ali.then((res) => res.json()).then((data) => console.log(data));

// // post XHHTTPREQUEST

// const xhr2 = new XMLHttpRequest();

// const url = "https://jsonplaceholder.typicode.com/todos";

// const data = {
//   title: "mollitia et enim quasi adipisci quia provident illum",
//   completed: false,
// };

// const postData = JSON.stringify(data);

// xhr2.open("POST", url, true);
// xhr2.setRequestHeader("Content-Type", "application/json");

// xhr2.onreadystatechange = function () {
//   if ((xhr2.status === 200 || xhr2.status === 201) && xhr2.readyState === 4) {
//     const response = JSON.parse(xhr2.responseText);
//     console.log(response);
//   } else if (xhr2.readyState === 4) {
//     console.log("err");
//   }
// };

// xhr2.send(postData);

// // axios post

// const postAxios = (postData) => {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   axios
//     .post(url, postData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((res) => res.data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// postAxios({ title: "feyza", completed: false });

// // asyn Await axios
// const postAxios1 = async (postData) => {
//   const url = "https://jsonplaceholder.typicode.com/todos";

//   try {
//     const res = await axios.post(url, postData, {
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// postAxios1({ title: "ayse", completed: true });
// // asyn Await axios
// const postfetch1 = async (postData) => {
//   const url = "https://jsonplaceholder.typicode.com/todos";

//   try {
//     const ali = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(postData),
//     });
//     const data = await ali.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// postfetch1({ title: "göktug", completed: true });

// fetch("./todos/todos.json")
//   .then((res) => {
//     if (res.status !== 200) {
//       throw new Error("hata");
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getTodos3 = async () => {
  try {
    const ali = await fetch("./todos/todos1.json", {
      method: "GET",
    });
    if (ali.status !== 200) {
      throw Error("hata");
    }
    const data = await ali.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

getTodos3()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
