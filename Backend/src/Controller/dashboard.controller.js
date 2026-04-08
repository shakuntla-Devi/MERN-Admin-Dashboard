import Product from "../models/Product.js"
import User from "../models/User.js"

export const getStats = async (req, res) => {

  try {

    const totalProducts = await Product.countDocuments()
    const totalUsers = await User.countDocuments()

    res.json({
      totalProducts,
      totalUsers
    })

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

}