const User = require('../models/user')
const Order = require('../models/order')

const jwt = require('jsonwebtoken')

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

    res.status(201).json( {msg: 'Register success', user} )
      } catch(error) {
      return res.status(400).json({ msg: error.message })
    }
  }

  const loginUser = async (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please provide email and password' })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(500).json({ msg: 'Email is not matched' })
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.status(500).json({ msg: 'Password is not correct' })
    }
    const token = user.createJWT()
    res.status(200).json({ user: { name: user.name }, token })
  }

  const updateAuth = async (req, res) => {
    res.status(200).json({ user: req.user.userId})
  }

  const onlyAdmin = async (req, res) => {
    // console.log(req.user)
    // res.status(200).json(true)

    const authHeader = req.headers.authorization
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'No token provided' })
    }
  
    const token = authHeader.split(' ')[1]
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // console.log(decoded)
      const { userId, isAdmin, email } = decoded
      req.user = { userId, isAdmin, email }

      if (req.user.isAdmin) {
        return res.status(200).json(true)
      } else {
        return res.status(200).json(false)
      }
    } catch (error) {
      return res.status(401).json({ msg: 'Not authorized to access this route' })
    }
  }

  module.exports = {
    getAllUser,
    registerUser,
    loginUser,
    updateAuth,
    onlyAdmin
  }