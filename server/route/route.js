import express from "express";
import { saveData, getData } from "../controller/data-controller.js";

const router = express.Router();

router.post("/save", saveData)
router.get("/get/:redirectFrom", getData)

export default router;