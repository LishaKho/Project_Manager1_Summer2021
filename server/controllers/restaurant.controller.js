const Restaurant = require('../models/restaurant.model');

module.exports.getAll = (req, res) => {
	console.log("inside get all");

	Restaurant.find()
		.then((allRestaurants) => {
			console.log(allRestaurants);
			res.json(allRestaurants);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

module.exports.create = (req, res) => {
	console.log("inside create");
	console.log(req.body);  // holds the json object that we will use for create

	Restaurant.create(req.body)
		.then((newRestaurant) => {
			console.log(newRestaurant);
			res.json(newRestaurant);
		})
		.catch((err) => {
			console.log(err);
			// change the response object status to 400 so the client can see the error
			// then send the error in json back to the client
			res.status(400).json(err);
		})
};

	// get a single restaurant
module.exports.getOne = (req, res) => {
	console.log("inside getOne");
	console.log("looking for id: " + req.params.id);

	Restaurant.findById(req.params.id)
		.then((oneRestaurant) => {
			console.log(oneRestaurant);
			res.json(oneRestaurant);
		})
		.catch((err) => {
			console.log(err);
			// change the response object status to 400 so the client can see the error
			// then send the error in json back to the client
			res.status(400).json(err);
		})
};

// update a single restaurant
//	we will need the ID and the data to update an existing document
module.exports.update = (req, res) => {
	console.log("inside update");
	console.log("looking for id: " + req.params.id);
	console.log(req.body);  // holds the json object that we will use for create

	Restaurant.findByIdAndUpdate(req.params.id, req.body, {
		new: true,   					// return the updated object
		runValidators: true,  // use the same validation that was used for create
	})
		.then((updatedRestaurant) => {
			console.log(updatedRestaurant);
			res.json(updatedRestaurant);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}

	// delete a single restaurant
module.exports.delete = (req, res) => {
	console.log("inside delete");
	console.log("looking for id: " + req.params.id);

	Restaurant.findByIdAndDelete(req.params.id)
		.then((deletedRestaurant) => {
			// we get the data back as a last chance to keep it
			//		you don't need to do anything with this data if you don't want to
			console.log(deletedRestaurant);
			res.json(deletedRestaurant);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}