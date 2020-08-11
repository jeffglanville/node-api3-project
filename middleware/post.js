const posts = require("../posts/postDb")

function validatePost() {
    return (req, res, next) => {
        posts.insert(req.body.text, req.body)
        .then((post) => {
            if (!req.body) {
                res.status(400).json({
                    message: "missing post data"
                })
            }else if (!req.body.text) {
                res.status(400).json({
                    message: "missing required text field"
                })
            }else {
                res.json(post)
            }
        })
        .catch(next)
    }
}

module.exports = {
    validatePost
}