const express = require("express")
const db =  require("../data/config")

const router = express.Router()


/////// This handles the route http://localhost:4444/cars ///////


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
	try {
		const cars = await db("cars")
		
		res.json(cars)
	} catch(err) {
		next(err)
	}
})

// GET car by ID //

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const car = await db("cars").where({ id }).first()
		
		res.json(car)
	} catch(err) {
		next(err)
	}
})


/////////////// POST ///////////////

router.post("/", async (req, res, next) => {
	try {
		const carData = req.body
		const [id] = await db("cars").insert(carData)
		const newCar = await db("cars").where({ id })

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})


/////////////// PUT ///////////////
router.put("/:id", async (req, res, next) => {
	try {
        const carData = req.body
        await db("cars").where("id", req.params.id).update(carData)
        const updatedCar = await db("cars").where("id", req.params.id)
		res.status(201).json(updatedCar)

	} catch(err) {
		next(err)
	}
})


/////////////// DELETE ///////////////
router.delete("/:id", async (req, res, next) => {
	try {
        const id = req.params.id
        await db("cars").where("id", id).del()
        const updatedCar = await db("cars").where("id", id)
		res.status(200).json({
            message: `The car with the ID of ${id} has been deleted.`
        })

	} catch(err) {
		next(err)
	}
})



module.exports = router