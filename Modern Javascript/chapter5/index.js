const para = document.getElementsByTagName("p");
console.log(para);

const paras = document.body.querySelectorAll("p");

console.log(paras);

const paraf = document.querySelectorAll("p.error");

paraf.forEach((item) => (item.innerText += ` ali`));

const divContent = document.querySelector(".content");
divContent.innerHTML += `<h2>ali</h2>`;

const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("class", "ali");

const msg = document.querySelector(".error");

link.setAttribute("style", "color:#fff");

link.style.background = "orange";

const h1 = document.querySelector("h1");

let b = h1.getAttribute("style");
console.log(b);
h1.setAttribute("style", "color:#ccc");

console.log(h1.style);

const div1 = document.querySelector(".content");

console.log(div1.getAttribute("class"));

console.log(div1.lastChild);

const p1 = document.querySelector(".errors");

console.log(p1.classList);

p1.onclick = function () {
  if (p1.classList.contains("errors")) {
    p1.classList.add("success");
    p1.classList.remove("errors");
  } else {
    p1.classList.remove("success");
    p1.classList.add("errors");
  }
};

const allP = document.querySelectorAll(".p");

allP.forEach((item) => {
  if (
    item.innerText.includes("ali feyza") ||
    item.innerText.includes("beyda ali") ||
    item.innerText.includes("feyza beyda")
  ) {
    item.classList.add("success");
  }
});
