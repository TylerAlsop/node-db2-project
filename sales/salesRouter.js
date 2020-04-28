const express = require("express")
const db =  require("../data/config")

const router = express.Router()


/////// This handles the route http://localhost:4444/sales ///////


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
	try {
		const sales = await db("sales")
		
		res.json(sales)
	} catch(err) {
		next(err)
	}
})

// GET sale by ID //

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const sale = await db("sales").where({ id }).first()
		
		res.json(sale)
	} catch(err) {
		next(err)
	}
})


/////////////// POST ///////////////

router.post("/", async (req, res, next) => {
	try {
		const saleData = req.body
		const [salesId] = await db("sales").insert(saleData)
		const newSale = await db("sales").where({ salesId })

		res.status(201).json(newSale)
	} catch(err) {
		next(err)
	}
})


/////////////// PUT ///////////////
router.put("/:id", async (req, res, next) => {
	try {
        const saleData = req.body
        await db("sales").where("salesId", req.params.id).update(saleData)
        const updatedSale = await db("sales").where("salesId", req.params.id)
		res.status(201).json(updatedSale)

	} catch(err) {
		next(err)
	}
})


/////////////// DELETE ///////////////
router.delete("/:id", async (req, res, next) => {
	try {
        const id = req.params.id
        await db("sales").where("salesId", id).del()
		res.status(200).json({
            message: `The sale with the Sales ID of ${id} has been deleted.`
        })

	} catch(err) {
		next(err)
	}
})



module.exports = router