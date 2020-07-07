import VendrController from "./controllers/VendrController.js";
console.log("Hello from Main js");


class App {
  constructor() {
    this.vendrController = new VendrController()
  }
}

window["app"] = new App()