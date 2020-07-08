import VendrService from "../services/VendrService.js";


let _vendrService = new VendrService()

function _draw() {
  document.getElementById("target").innerHTML = _vendrService.Target.Template
}

export default class VendrController {
  constructor() {
    console.log("Hello from Controller js");
    _draw()
  }
  money() {
    _vendrService.money()
    console.log(_vendrService.Target.money);
    _draw()
  }

  purchaseFruit() {
    _vendrService.purchaseFruit()

    _draw()
  }

}

