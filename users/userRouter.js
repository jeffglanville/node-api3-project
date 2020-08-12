const express = require('express');

const router = express.Router();

const { validateUserId, validateUser, validatePost } = require("../middleware/user")
const users = require("./userDb")

router.post('/users', validateUser, (req, res) => {
  users.insert(req.body)
  .then((user) => {
    res.status(201).json(user)
  })
  .catch(next)
});

router.post('/users/:id/posts', validateUserId(),  (req, res) => {
  if(!req.body.text) {
    return res.status(400).json({
      message: "the value for the post text is missing"
    })
  }
});

router.get('/users', (req, res, next) => {
  users.get(users)
  .then((users) => {
    res.status(200).json(users)
  })
  .catch(next)
});

router.get('/users/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
});

router.get('/users/:id/posts', validateUserId, (req, res) => {
  users.getUserPosts(req.params.id)
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch((error) => {
    next(error)
  })
});

router.delete('/users/:id', validateUserId, (req, res) => {
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
  .catch(next)
});

router.put('/users/:id', validateUser(), validateUserId, (req, res) => {
  users.update(req.params.id, req.body)
  .then((user) => {
    res.status(200).json(user)
  })
  .catch(next)
});

module.exports = router
