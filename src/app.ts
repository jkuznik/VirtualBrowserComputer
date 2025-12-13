import "./css/menu.css";
import { loadMainMenu} from "./ts/menu";
import {Computer, initialComputer} from "./ts/hardware/Computer";

document.addEventListener("DOMContentLoaded", (event) => {
  const computer = initialComputer();

  loadMainMenu(computer);
})
