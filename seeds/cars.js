
exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert([
    {vin: 'KSA7FJ2KMLA9AJ', year: 2010, make: 'Honda', model: 'CR-V', mileage: 119506, transmission: 'Automatic', title: 'clean'},
    {vin: 'ALKDA8AVAV52N2', year: 2012, make: 'Chevrolet', model: 'Sonic', mileage: 56708, transmission: 'Automatic', title: 'clean'},
    {vin: 'QNNRL8GS3M20B3', year: 2011, make: 'Toyota', model: 'Corolla', mileage: 70938, transmission: 'Automatic', title: 'salvage'},
    {vin: 'Q9QRKN2K3RN202', year: 2010, make: 'Tesla', model: '3', mileage: 30456, transmission: 'Electric', title: 'clean'},
  ]);

};
