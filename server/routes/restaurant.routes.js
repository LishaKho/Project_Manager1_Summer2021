const RestaurantController = require('../controllers/restaurant.controller');

module.exports = (app) => {
	app.get("/api/restaurants", RestaurantController.getAll);
	// create a new restaurant
	app.post("/api/restaurants", RestaurantController.create);
	// get a single restaurant
	app.get("/api/restaurants/:id", RestaurantController.getOne);
	// update a single restaurant
	app.put("/api/restaurants/:id", RestaurantController.update);
	// delete a single restaurant
	app.delete("/api/restaurants/:id", RestaurantController.delete);
}