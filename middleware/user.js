const users = require("../users/userDB")

function validateUserId() {
    return (req, res, next) => {
        users.getById(req.params.id)
        .then((user) => {
            if(user) {
                req.user = user
                next()
            }else {
                res.status(400).json({
                    message: "invalid user id"
                })
            }
        })
        .catch(next)
    }
}

function validateUser() {
    return (req, res, next) => {
        user.insert(req.body.name, req.body)
        .then((user) => {
            if (!req.body) {
                res.status(400).json({
                    message: "missing user data"
                })
            }else if (!req.body.name) {
                res.status(400).json({
                    message: "missing required name field"
                })
            }else {
                res.json(user)
            }
        })
        .catch(next)
    }
}

function validatePost(req, res, next) {
    if (!req.body) {
      return res.status(400).json({
        message: "missing post data"
      })
    }else if (!req.body.text) {
      return res.status(400).json({
        message: "missing required text field"
      })
    }else {
      next()
    }
  }

module.exports = {
    validateUserId,
    validateUser,
    validatePost
}