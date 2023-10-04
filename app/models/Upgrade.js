


export class Upgrade{
  constructor(name, price, emoji, multiplier, type){
    this.name = name
    this.price = price
    this.emoji = emoji
    this.multiplier = multiplier
    // this.type = type
    // NOTE we did not take in one, just set it to 0 as a default
    this.qty = 0
  }

  get shopCard(){
    return `
    <div class="col-4 bg-success p-3">
      <button class="btn btn-warning" onclick="app.UpgradesController.buyUpgrade('${this.name}')" >${this.emoji} ${this.name} ${this.price}/ 🫳${this.multiplier}</button> <span>${this.qty}</span>
    </div>
    `
  }
}