const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: `${process.env.MOTD}` ,
        fun_fact: process.env.FUN_FACT || "No Hobbit facts today!"
    })
})

module.exports = router