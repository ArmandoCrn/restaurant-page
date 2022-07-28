export default function createMenu() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "menu";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  `;

  console.log(mainContent);
}
