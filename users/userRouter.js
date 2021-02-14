const express = require('express');

const router = express.Router();

const { validateUserId, validateUser, validatePost } = require("../middleware/user")
const users = require("./userDb")
const posts = require("../posts/postDb")

router.post('/users', validateUser, (req, res, next) => {
  users.insert(req.body.name)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch((error) => {
    next(error)
  })
});

router.post('/users/:id/posts', validateUserId(), validatePost(), (req, res, next) => {
  posts.insert(req.body)
  .then((post) => {
    res.status(201).json(post)
  })
  .catch((error) => {
    next(error)
  })
})

router.get('/users', (req, res, next) => {
  users.get(users)
  .then((users) => {
    res.status(200).json(users)
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/users/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
});

router.get('/users/:id/posts', validateUserId(), (req, res) => {
  users.getUserPosts(req.params.id)
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch((error) => {
    console.log(error.stack)
    next(error)
  })
});

router.delete('/users/:id', validateUserId(), (req, res) => {
  users.remove(req.params.id)
  .then((count) => {
    if (count > 0) {
      res.status(200).json({
        message: "The selected user has been deleted"
      })
    }else {
      res.status(400).json({
        message: "The user could not be found"
      })
    }
  })
  .catch((error) => {
    next(error)
  })
});

router.put('/users/:id', validateUserId(), (req, res, next) => {
  users.update(req.params.id, req.body)
  .then((user) => {
    res.status(200).json(user)
  })
  .catch((error) => {
    next(error)
  })
});

module.exports = router
