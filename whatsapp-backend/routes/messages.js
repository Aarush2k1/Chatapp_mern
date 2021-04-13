import express from "express";
import { createMsg, findMsg } from "../controllers/messages";

const router = express.Router();
router.get("/", (req, res) => res.status(200).send("hello"));

router.get("/messages/sync", findMsg);

router.post("/messages/new", createMsg);

export default router;
