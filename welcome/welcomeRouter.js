const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to my node-db2-project.",
	})
})

module.exports = router