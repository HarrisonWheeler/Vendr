import VendrService from "../services/VendrService.js";


let _vendrService = new VendrService()

function _draw() {
  // console.log("moneyssss");

  document.getElementById("money-available").innerHTML
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

