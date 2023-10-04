import { GamesController } from "./controllers/GamesController.js";
import { UpgradesController } from "./controllers/UpgradesController.js";


export const router = [
  {
    path: '',
    controller: [GamesController, UpgradesController],
    view: null
  }
]