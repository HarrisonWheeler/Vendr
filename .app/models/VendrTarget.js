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
        chips: 0,
        snickers: 0
      }
  }
  get Template() {
    let subTemplate = /*html*/ `
    <header class="container-fluid">
      <div class="row pt-3">
        <div class="col-12">
          <h1 class="text-center">Vendrrrr</h1>
        </div>
      </div>
    </header>
  
    <main class="container-fluid">
      <div class="row pt-3">
        <div class="col-sm-12 col-md-4 pb-2">
          <div class="card text-white bg-dark">
            <img class="card-img-top" src="" alt="">
            <div class="card-body text-center">
              <h4 class="card-title">Fruit Snacks</h4>
              <p class="card-text">$1.00</p>
              <button class="btn btn-light" onclick="app.vendrController.purchaseFruit()">Purchase</button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 pb-2">
          <div class="card text-white bg-dark">
            <img class="card-img-top" src="" alt="">
            <div class="card-body text-center">
              <h4 class="card-title">Cheesy Chips</h4>
              <p class="card-text">$2.00</p>
              <button class="btn btn-light">Purchase</button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 pb-2">
          <div class="card text-white bg-dark">
            <img class="card-img-top" src="" alt="">
            <div class="card-body text-center">
              <h4 class="card-title">Snickers</h4>
              <p class="card-text">$3.00</p>
              <button class="btn btn-light">Purchase</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-sm-12 col-md-4 d-flex justify-content-center">
          <button class="btn btn-dark" onclick="app.vendrController.money()">Add .25 Cents</button>
        </div>
        <div class="col-sm-12 col-md-4 d-flex justify-content-center">
          <h2>Money Available: $ ${this.money}</h2>
        </div>
        <div class="col-sm-12 col-md-4 d-flex justify-content-center">
          <h2>Snacks Purchased: </h2>
        </div>
      </div>
    </main>
        `
    return subTemplate
  };
}

