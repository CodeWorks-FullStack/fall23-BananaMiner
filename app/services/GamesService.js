import { AppState } from "../AppState.js"



class GamesService{
  mineBanana(){
    console.log('service 🍌', AppState.bananas)

    let total = 0
    total++
    AppState.upgrades.forEach(upgrade => {
        total += upgrade.multiplier *upgrade.qty
    })
    AppState.bananas += total
    AppState.lifeTimeBananas += total
    AppState.bananasPerClick = total
  }
}


export const gamesService = new GamesService()

