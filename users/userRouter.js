const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId() {
  return (req, res, next) => {
    users.getById(req.params.id)
    .then((user) => {
      if (user) {
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

function validateUser(req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      message: "missing user data"
    })
  }else if (!req.body.name) {
    return res.status(400).json({
      message: "missing required name field"
    })
  }else {
    next()
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
  router,
  validateUserId,
  validateUser,
  validatePost
}
