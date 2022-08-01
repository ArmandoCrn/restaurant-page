import { createEl } from "./webpage";

export default function createAboutUs() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "about-us";
  mainContent.innerHTML = `
  <h1>Burger Joy</h1>
  <div class="hr"></div>

  <div class="information">
  <p class="story">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ipsa dolor explicabo ducimus itaque doloribus consequatur, qui quos expedita deserunt perferendis consequuntur id eligendi, cum praesentium libero obcaecati fuga atque!</p>
  <p>📞 000 111 222</p>
  <p>📍 Lorem Ipsum 18, Sit Amet, USA</p>
  </div>
  `;
}
