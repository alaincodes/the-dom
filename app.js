// const para = document.querySelector("body > div:nth-child(2) > p.error");

// const paras = document.querySelectorAll("p");

// const errors = document.querySelectorAll(".error");
// console.log(errors);

// const content = document.querySelector(".content");

// console.log(content.innerHTML);
// content.innerHTML += "<h2>THIS IS A NEW H2</h2>";

// Use += to append new content or = to overwrite.

// const people = ["mario", "luigi", "yoshi"];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.alainpower.com");
// link.innerText = "Personal fake page";

// const mssg = document.querySelector("p");

// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green;");

// const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 50px;");
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "crimson";
// title.style.fontSize = "90px";
// remove property
// title.style.margin = "";

// const content = document.querySelector("p");
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

const paras = document.querySelectorAll("p");

paras.forEach(p => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.innerText.includes("success")) {
    p.classList.add("success");
  }
});

const title = document.querySelector(".title");
title.classList.toggle("test");
title.classList.toggle("test");
