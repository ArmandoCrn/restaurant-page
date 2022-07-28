export default function createHome() {
  const mainContent = document.querySelector("main > div");
  mainContent.className = "home";

  mainContent.innerHTML = `
    <h1>Burger Joy</h1>
    <h3>Best Hamburger in your country!</h3>
    <p>Made with passion since 1920.</p>

    <div class="hr"></div>

    <div class="hours">
      <ul>
        <li>
          <span class="t-left">Monday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Tuesday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Wednesday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Thursday:</span>
          <span>9am - 8pm</span>
        </li>
        <li>
          <span class="t-left">Friday:</span>
          <span>9am - 11pm</span>
        </li>
        <li>
          <span class="t-left">Saturday:</span>
          <span>9am - 1pm</span>
        </li>
        <li>
          <span class="t-left">Sunday:</span>
          <span>9am - 11pm</span>
        </li>
      </ul>
    </div>
  `;
}
