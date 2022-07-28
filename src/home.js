import { createEl } from "./webpage";

export default function createHome() {
  const div = createEl("div");
  div.classList.add("p-x", "al-itm");

  const main = createEl("main");

  const home = createEl("div");
  home.classList.add("home");

  /*quando bisogna appendere le robe è un casino, diomado'*/
  div.appendChild(main);
}
