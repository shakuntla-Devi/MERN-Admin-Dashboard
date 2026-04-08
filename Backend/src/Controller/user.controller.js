import User from "../models/User.js"

// GET USERS
export const getUsers = async (req, res) => {

  try {

    const users = await User.find()

    res.json(users)

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

}


// CREATE USER
export const createUser = async (req, res) => {

  try {

    const { name, email, password } = req.body

    const user = new User({
      name,
      email,
      password
    })

    await user.save()

    res.json(user)

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

}


// DELETE USER
export const deleteUser = async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id)

    res.json({ message: "User Deleted" })

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

}