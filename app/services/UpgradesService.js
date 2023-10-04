import { AppState } from "../AppState.js"



class UpgradesService{
  buyUpgrade(upgradeName) {

    const upgrade = AppState.upgrades.find(upgrade => upgrade.name == upgradeName)
    console.log('buying a ', upgrade);
    if(AppState.bananas >= upgrade.price){
      AppState.bananas -= upgrade.price
      upgrade.qty++
      upgrade.price = Math.round(1.25 * upgrade.price)
    } else {
      console.error("not enough banana");
    }
  }

}

export const upgradesService = new UpgradesService()