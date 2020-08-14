const express = require("express")

const logger = require("./middleware/logger")

const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

const server = express()
const port = 5000

server.use(express.json())

server.use(logger())

server.use(userRouter)
server.use(postRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
})

server.listen(port, () => {
    console.log(`Server is listening and running at http://localhost:${port}`)
})
