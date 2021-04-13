import express from "express";
import Messages from "../models/dbmessages.js";

const router = express.Router();

export const findMsg = async (req, res) => {
  try {
    const findMessages = await Messages.find();
    res.status(200).json(findMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createMsg = async (req, res) => {
  const dbMessage = req.body;
  try {
    await dbMessage.save();
    res.status(200).json(dbMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export default router;
