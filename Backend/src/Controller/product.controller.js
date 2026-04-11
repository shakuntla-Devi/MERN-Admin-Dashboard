import Product from "../models/Product.js"

// GET PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET SINGLE PRODUCT ✅ ADD THIS
export const getSingleProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {

    const { name, price, category } = req.body

    const product = new Product({
      name,
      price,
      category
    })

    await product.save()

    res.json(product)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id)

    res.json({ message: "Product Deleted" })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {

    const { name, price, category } = req.body

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category },
      { new: true }
    )

    res.json(product)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}