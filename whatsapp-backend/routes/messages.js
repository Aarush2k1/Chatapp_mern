import express from "express";
import { createMsg, findMsg } from "../controllers/messages.js";

const router = express.Router();

router.get("/sync", findMsg);
router.post("/new", createMsg);

export default router;
