import express from "express"

import {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    getSingleProduct   // ✅ ADD THIS
} from "../Controller/product.controller.js"

const router = express.Router()

router.get("/", getProducts)

// ✅ ADD THIS ROUTE (VERY IMPORTANT)
router.get("/:id", getSingleProduct)

router.post("/", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

export default router