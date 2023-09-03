const User = require('../models/user')
const Order = require('../models/order')

const getAllUser = async (req, res) => {
  // res.status(201).json({ 'msg' :'All users' })
    try{
        const user = await User.find({})
        res.status(201).json({ user })
    } catch(error) {
        return res.status(400).json({ msg: error })
    }
  }

const registerUser = async (req, res) => {

  try{
    const user = await User.create({ ...req.body })
    console.log(user)

    res.status(201).json( user )
      } catch(error) {
      return res.status(400).json({ msg: error.message })
    }
  }

  const loginUser = async (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      // throw new BadRequestError('Please provide email and password')
      return res.status(400).json({ msg: 'Please provide email and password' })
    }
    const user = await User.findOne({ email })
    if (!user) {
      // throw new UnauthenticatedError('Invalid Credentials')
      return res.status(500).json({ msg: 'Email is not matched' })
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.status(500).json({ msg: 'Password is not correct' })
    }
    // compare password
    const token = user.createJWT()
    res.status(200).json({ user: { name: user.name }, token })
  }

  const updateAuth = async (req, res) => {
    res.status(200).json({ user: req.user.userId})
  }

  module.exports = {
    getAllUser,
    registerUser,
    loginUser,
    updateAuth
    // updateTask,
    // deleteTask,
  }