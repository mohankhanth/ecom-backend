const jwt = require('jsonwebtoken')
// const { UnauthenticatedError } = require('../errors')
// { userId: this._id, isAdmin: this.isAdmin, email:this.email },

const authenticationMiddleware = async (req, res, next) => {
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
    next()
  } catch (error) {
    return res.status(401).json({ msg: 'Not authorized to access this route' })
  }
}

const adminPermissions = () => {
    return (req, res, next) => {
        console.log(req.user.isAdmin)
      if (!req.user.isAdmin) {
        return res.status(401).json({ msg: 'Unauthorized to access this route' })
      }
      next();
    };
  };

  const onlyAdminMiddleware = async (req, res, next) => {
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
      if (!req.user.isAdmin) {
        return res.status(401).json({ msg: 'Only admin can create category' })
      }
      next()
    } catch (error) {
      return res.status(401).json({ msg: 'Not authorized to access this route' })
    }
  }

module.exports = {authenticationMiddleware, adminPermissions, onlyAdminMiddleware}