const knex = require("knex")
const knexfile = require("../knexfile")

// an instance of knex we can import into other files, for interacting with the database
module.exports = knex(knexfile)
