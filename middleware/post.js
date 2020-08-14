const posts = require("../posts/postDb")

function validatePostId() {
  return (req, res, next) => {
    posts.getById(req.params.id)
    .then((post) => {
      if (post) {
        req.post = post
        next()
      }else {
        res.status(400).json({
          message: "invalid post id"
        })
      }
    })
    .catch(next)
  }
}

  module.exports = validatePostId