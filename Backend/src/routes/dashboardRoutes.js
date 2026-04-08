import express from "express"
import { getStats } from "../Controller/dashboard.controller.js"

const router = express.Router()

router.get("/", getStats)

export default router