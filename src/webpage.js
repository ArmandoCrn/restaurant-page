import createHome from "./home";
import createAboutUs from "./about-us";
import createMenu from "./menu";

export function createEl(el) {
  return document.createElement(el);
}

const content = document.querySelector("#content");

function createNav() {
  const nav = createEl("nav");
  const ul = createEl("ul");
  ul.innerHTML = `
    <li class="active">Home</li>
    <li>Menu</li>
    <li>About Us</li>
  `;
  nav.appendChild(ul);
  content.appendChild(nav);
}

function createMain() {
  const div = createEl("div");
  div.classList.add("p-x", "al-itm");

  const main = createEl("main");

  const divContent = createEl("div");

  main.appendChild(divContent);
  div.appendChild(main);
  content.appendChild(div);
}

function createFooter() {
  const footer = createEl("footer");
  footer.innerHTML = `
    <p>
      Copyright &copy;2022 ArmandoCrn
      <a href="https://github.com/ArmandoCrn" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
    </p>
  `;

  content.appendChild(footer);
}

function liEvent() {
  if (!this.className) {
    const [home, menu, aboutUs] = document.querySelectorAll("nav li");

    if (this === home) {
      menu.classList.remove("active");
      aboutUs.classList.remove("active");
      createHome();
    }

    if (this === menu) {
      home.classList.remove("active");
      aboutUs.classList.remove("active");
      createMenu();
    }

    if (this === aboutUs) {
      home.classList.remove("active");
      menu.classList.remove("active");
      createAboutUs();
    }

    this.classList.add("active");
  }
}

export default function createWeb() {
  createNav();

  createMain();
  createHome();

  createFooter();

  const lItems = document.querySelectorAll("nav li");
  lItems.forEach((li) => li.addEventListener("click", liEvent));
}
