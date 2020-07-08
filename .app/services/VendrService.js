import Target from "../models/VendrTarget.js";

let _target = new Target(0)

export default class VendrService {

  constructor() {
    console.log("Hello from Service JS");
  }

  get Target() {
    return _target
  }
  money() {
    _target.money += .25
  }

  purchaseFruit() {
    if (_target.money >= _target.snacksCost.fruit) {
      _target.money -= _target.snacksCost.fruit
      _target.snacksPurchased.fruit++
    } else {
      return alert("Not Enough Money")
    }


  }
}