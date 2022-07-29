export default function createMenu() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "menu";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  <div class="hr"></div>

  <div class="items-menu">

    <div class="menu-item">
      <img src="../dist/img/product/img1-hamburger.png" alt="" />
      <h3>Hamburger <span class="clr">$3.49</span></h3>
      <p class="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eos voluptatibus reprehenderit consectetur.
      </p>
    </div>

  </div>

  `;

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
  /*fai una funzione che generi tot elementi html
  function (product) {
    return `
    e sistemi tutti i cosi con il place older per i cosi e poi 
    non scordare l'alt nella foto fai tipo product.name + photo
    non scordare il $
    ecc ecc ecc
    `;
  }

  poi magari quando deve essere chiamata si fa
  products.forEach(product)
  e gli passi il product all'interno della funzione superiore
  e appendi gli oggetti al coso
  
  
  */

  console.log(mainContent);
}
