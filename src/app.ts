import "./css/menu.css";
import { loadMainMenu} from "./ts/menu";
import {Computer, initialComputer} from "./ts/hardware/Computer";

document.addEventListener("DOMContentLoaded", async (event) => {
  const computer: Computer = await initialComputer();

  loadMainMenu(computer);
})
