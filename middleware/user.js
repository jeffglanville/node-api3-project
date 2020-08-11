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
            }else if (!res.body.name) {
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

module.exports = {
    validateUserId,
    validateUser
}