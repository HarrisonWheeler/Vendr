import VendrService from "../services/VendrService.js";


let _vendrService = new VendrService()

function _draw() {
  document.getElementById("money-available").innerHTML = _vendrService.Target
}

export default class VendrController {
  constructor() {
    console.log("Hello from Controller js");
    _draw()
  }
  money() {
    _vendrService.money()
    console.log(_vendrService.Target);
    _draw()
  }
}

