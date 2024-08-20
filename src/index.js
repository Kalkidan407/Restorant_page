import "./styles.css";
import { createNewDiv } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const newDiv = createNewDiv();
const menuDiv = menuPage();
const contactDiv = contactPage();

const home_btn = document.getElementById("home");
const menu_btn = document.getElementById("menu");
const contact_btn = document.getElementById("contact");

function showContent(selectedDiv) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(selectedDiv);
}

home_btn.addEventListener("click", function () {
  showContent(newDiv);
});

menu_btn.addEventListener("click", function () {
  showContent(menuDiv);
});
contact_btn.addEventListener("click", function () {
  showContent(contactDiv);
  contactDiv.textContent = "Contact";
});
