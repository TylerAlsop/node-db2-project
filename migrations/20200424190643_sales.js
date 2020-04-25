exports.up = async function(knex) {
    await knex.schema.createTable("sales", (table) => {
        table.increments("salesId")
        table.text("dateSold").notNull()
        table.foreign("carId").references('cars.id')
        table.foreign("vin").references('cars.vin')
        table.foreign("year").references('cars.id')
        table.foreign("make").references('cars.make')
        table.foreign("mileage").references('cars.mileage')
        table.foreign("transmission").references('cars.transmission')
        table.foreign("title").references('cars.title')
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("sales")
};
