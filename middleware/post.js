const posts = require("../posts/postDb")

function validatePostId(req, res, next) {
    posts.insert(req.params.id)
    .then((post) => {
      if (!req.params.id) {
        res.status(400).json({
          message: "post id is missing"
        })
      }else {
        res.json(post)
      }
    })
    .catch(next)
  }