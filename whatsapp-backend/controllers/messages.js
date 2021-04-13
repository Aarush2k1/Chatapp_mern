import express from "express";
import mongoose from "mongoose";

import Messages from "../models/dbmessages";

const router = express.Router();

export const findMsg = async (req, res) => {
  try {
    const findMessages = Messages.find();
    res.status(200).json(Messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createMsg = async (req, res) => {
  try {
    const dbMessage = req.body;
    Messages.create(dbMessage);
    res, status(200).json(Messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export default router;
