import { AppState } from "../AppState.js";
import { gamesService } from "../services/GamesService.js";
import { setText } from "../utils/Writer.js";

function _drawBananas(){
  const bananas = AppState.bananas
  console.log('drawing bananas', bananas);
  setText('banana-count', bananas)
  setText('click-power', AppState.bananasPerClick)
}

export class GamesController{
  constructor(){
    console.log('game controller loaded');
    AppState.on('bananas', _drawBananas)
    _drawBananas()
  }

  mineBanana(){
    console.log('🍌');
    gamesService.mineBanana()
    // _drawBananas() now handled by listener
  }
}