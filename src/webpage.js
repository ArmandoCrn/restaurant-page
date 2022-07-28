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

function liEvent() {
  if (!this.className) {
    const [home, menu, aboutUs] = document.querySelectorAll("nav li");

    if (this === home) {
      menu.classList.remove("active");
      aboutUs.classList.remove("active");
    }

    if (this === menu) {
      home.classList.remove("active");
      aboutUs.classList.remove("active");
    }

    if (this === aboutUs) {
      home.classList.remove("active");
      menu.classList.remove("active");
    }

    this.classList.add("active");
    console.log({ home, menu, aboutUs });
  }
}

export default function createWeb() {
  createNav();
  const lItems = document.querySelectorAll("nav li");
  lItems.forEach((li) => li.addEventListener("click", liEvent));

  /*create content centrale che sia esso home, menu o about-us*/

  /*createFooter()*/
}

/*
Praticamente qui lasciamo solo la funzione che sarà presente in webpage.js 
così che svolga il suo ruolo

ma per iniziare dovrò scrivere prima cosa succede(?)

vabbe praticamente in webpage.js creiamo la funzione che costruisce l'header
il footer
e il main
in home.js creiamo quello che costruisce tutto ciò all'interno di main
quando premiamo main
*/
