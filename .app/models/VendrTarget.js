export default class Target {
  constructor(money) {
    console.log("Hello from Target JS");
    this.money = money
    this.snacksCost = {
      fruit: 1,
      chips: 2,
      snickers: 3
    },
      this.snacksPurchased = {
        fruit: 0,
        chips: 2,
        snickers: 3
      }
  }
}

