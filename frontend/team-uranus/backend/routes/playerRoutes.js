import express from "express";

import {
  getPlayers,
  addPlayer,
  deletePlayer,
} from "../controllers/playerController.js";

const router = express.Router();

router.get("/", getPlayers);

router.post("/", addPlayer);

router.delete("/:id", deletePlayer);

export default router;