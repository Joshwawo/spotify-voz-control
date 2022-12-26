import { Router } from "express";
import {
  play,
  pause,
  recentlyPlayer,
  nextSong,
  previousSong,
  playSong,
  volume,
} from "../controllers/playerCtrl.js";

const router = Router();

router.get('/play',playSong)
router.get("/pause", pause);
router.get("/next", nextSong);
router.get("/previous", previousSong);
router.get("/currensong", play);
router.get("/recent", recentlyPlayer);
router.get('/volume',volume)

export { router };
