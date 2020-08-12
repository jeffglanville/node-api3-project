const express = require('express');

const { validatePost } = require("../middleware/user")
const { validatePostId } = require("../middleware/post")

const router = express.Router();

router.get('/posts', (req, res, next) => {
  const options = {
    sortBy: req.query.sortBy,
    limit: req.query.limit
  }

  posts.get(options)
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch(next)
});

router.get('/posts/:id', validatePostId(), (req, res) => {
  res.status(200).json(req.post)
});

router.delete('/posts/:id', validatePostId(), (req, res, next) => {
  posts.remove(req.params.id)
  .then((count) => {
    if (count > 0) {
      res.status(200).json({
        message: "The selected post has been removed"
      })
      }else {
        res.status(400).json({
          message: "The selected post could not be found"
        })
    }
  })
  .catch(next)
});

router.put('/posts/:id', validatePost(), validatePostId(), (req, res, next) => {
  posts.update(req.params.id, req.body)
  .then((post) => {
    res.status(200).json(post)
  })
.catch(next)
});


module.exports = {
  router,
  validatePostId,
  validatePost
}
