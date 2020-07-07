import Target from "../models/VendrTarget.js";

let _target = new Target(0)

export default class VendrService {

  constructor() {
    console.log("Hello from Service JS");
  }


  get Target() {
    return _target.money
  }
  money() {
    _target.money += .25
  }
}