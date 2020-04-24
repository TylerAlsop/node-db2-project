const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcomeRouter")
const carsRouter = require("./cars/carsRouter")

const server = express()
const port = process.env.PORT || 4444

server.use(helmet())
server.use(express.json())

server.use("/", welcomeRouter)
server.use("/cars", carsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Oh no! Something went wrong.",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
