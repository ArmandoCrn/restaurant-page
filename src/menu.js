import { createEl } from "./webpage";

export default function createMenu() {
  const products = [
    {
      name: "Hamburger",
      url: "1-hamburger",
      price: "3.49",
    },
    {
      name: "Cheeseburger",
      url: "2-cheesburger",
      price: "4.49",
    },
    {
      name: "Steak",
      url: "3-steak",
      price: "10.99",
    },
    {
      name: "BBQ Ribs",
      url: "4-bbq",
      price: "7.99",
    },
    {
      name: "Caesar Salad",
      url: "5-salad",
      price: "7.49",
    },
    {
      name: "French Fries",
      url: "6-fries",
      price: "1.99",
    },
  ];

  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eos voluptatibus reprehenderit consectetur.";

  const mainContent = document.querySelector("main > div");
  mainContent.className = "menu";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  <div class="hr"></div>
  `;

  const itemsMenu = createEl("div");
  itemsMenu.classList.add("items-menu");

  function generateItem(product) {
    const text = `
    <img src="img/product/img${product.url}.png" alt="${product.name} photo" />
    <h3>${product.name} <span class="clr">$${product.price}</span></h3>
    <p class="description">
    ${description}
    </p>
    `;

    const menuItem = createEl("div");
    menuItem.classList.add("menu-item");
    menuItem.dataset.product = product.url;
    menuItem.innerHTML = text;

    return menuItem;
  }

  products.forEach((product) => itemsMenu.appendChild(generateItem(product)));

  mainContent.appendChild(itemsMenu);
}
