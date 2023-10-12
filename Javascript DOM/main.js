document.addEventListener("DOMContentLoaded", () => {
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

  // Array.from(btns).forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     const li = e.target.parentElement;
  //     li.remove();
  //   });
  // });

  // const link = document.querySelector("a");

  // link.addEventListener("click", (e) => {
  //   e.preventDefault();
  // });

  const list = document.querySelector("#book-list ul");
  console.log(list);

  list.addEventListener(
    "click",
    (e) => {
      if (e.target.className === "delete") {
        const li = e.target.parentElement;
        li.remove();
      }
    },
    false
  );

  const addForm = document.querySelector("#add-book");

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span1.textContent = value;
    span1.className = "name";
    span2.textContent = "delete";
    span2.classList.add("delete");
    li.append(span1, span2);
    list.append(li);
  });

  const atr = addForm.hasAttribute("href");
  const atr1 = addForm.setAttribute("class", "a");
  const atr3 = addForm.getAttributeNames();
  const atr4 = addForm.removeAttribute("class");
  console.log(atr);

  const hideBox = document.querySelector("#hide");
  hideBox.addEventListener("change", (e) => {
    const ul = document.body.querySelector("#book-list ul");
    if (e.target.checked) {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  });
  const input = document.querySelector("#search-books input");
  input.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    const lists = document.querySelectorAll("#book-list ul li");
    lists.forEach(function (list) {
      if (list.firstElementChild.innerText.toLowerCase().indexOf(value) != -1) {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
    });
  });

  const tabsUl = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabsUl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function (panel) {
        if (panel === targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  });
});
