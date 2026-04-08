import express from "express"
import { getStats } from "../controller/dashboard.controller.js"

const router = express.Router()

router.get("/", getStats)

export default router