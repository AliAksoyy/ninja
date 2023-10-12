const books = document.querySelectorAll("#book-list li .name");

books.forEach(function (book) {
  book.textContent += " (book title)";
});

const bookList = document.querySelector("#book-list");

// bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add Book</p>";

const banner = document.querySelector("#page-banner");

console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);

console.log(bookList.parentNode);
console.log(bookList.parentElement);

console.log(bookList.previousElementSibling);
console.log(bookList.nextElementSibling);
bookList.previousElementSibling.querySelector(
  "p"
).innerHTML += `<br/>Too cool for everyone else !`;

const btns = document.querySelectorAll("#book-list .delete");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    li.remove();
  });
});

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();
});
