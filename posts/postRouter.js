const express = require('express');

const router = express.Router();

router.get('/posts', (req, res) => {
  // do your magic!
});

router.get('/posts/:id', (req, res) => {
  // do your magic!
});

router.delete('/posts/:id', (req, res) => {
  // do your magic!
});

router.put('/posts/:id', (req, res) => {
  // do your magic!
});

// custom middleware

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

module.exports = {
  router,
  validatePostId
}
