import { AppState } from "../AppState.js";
import { upgradesService } from "../services/UpgradesService.js";
import { setHTML, setText } from "../utils/Writer.js";
import { GamesController } from "./GamesController.js";

function _drawUpgrades(){
  const upgrades = AppState.upgrades
  let content = ''
  upgrades.forEach(upgrade => content += upgrade.shopCard)
  console.log('drawing', content);
  setHTML('shop', content)
}

export class UpgradesController{
  constructor(){
    console.log('upgrades controller loaded');
    console.log('💾', AppState.upgrades);
    _drawUpgrades()
  }

  buyUpgrade(upgradeName){
    console.log('buying', upgradeName);
    upgradesService.buyUpgrade(upgradeName)
    _drawUpgrades(
    )
  }
}