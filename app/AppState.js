import { Upgrade } from "./models/Upgrade.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  bananas = 0

  lifeTimeBananas = 0

  bananasPerClick = 1

  upgrades = [
    new Upgrade('Monkey', 20, '🐒', 1),
    new Upgrade('Gorilla', 50, '🦍', 5),
    new Upgrade('Orangutan', 75, '🦧', 10),
    new Upgrade('Elephant', 100, '🐘', 25),
    new Upgrade('Banana', 1000, '🍌', 10),
    new Upgrade('Vampire', 0, '🧛', -5),
    new Upgrade('Squid', 5, '🦑', 2),
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
