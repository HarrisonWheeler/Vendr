import VendrController from "./controllers/VendrController.js";
console.log("Hello from main js");


class App {
  constructor() {
    this.vendrController = new VendrController()
  }
}

window["app"] = new App()