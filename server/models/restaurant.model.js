const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "A restaurant name is required"],
		minLength: [5, "A restaurant name must be at least 5 characters long"],
	},
	address: {
		type: String,
		required: [true, "A restaurant address is required"],
		minLength: [10, "A restaurant address must be at least 10 characters long"],
	},
	phone: {
		type: String,
		required: [true, "A restaurant phone number is required"],
		minLength: [10, "A restaurant phone number must be at least 10 characters long"],
	},
	cuisine: {
		type: String,
		required: [true, "A restaurant cuisine is required"],
		// enumeration will allow us to limit the answers to specific strings
		enum: [
			"Bar",
			"Breakfast",
			"Burgers",
			"Cafe",
			"Chinese",
			"Coffee Shop",
			"Fine Dining",
			"Ice Cream",
			"Italian",
			"Mexican",
			"Pizza",
			"Sandwiches",
			"Seafood",
			"Steakhouse",
			"Thai",
		]
	},
	hasDelivery: {
		type: Boolean,
		default: false,
	},
	hours: {
		type: String,
		// by not making it required, it is now an optional value
	},
	homepage: {
		type: String,
		// by not making it required, it is now an optional value
	},
}, { timestamps: true });

// collection name and the schema are required to create a model
module.exports = mongoose.model("Restaurant", RestaurantSchema);
