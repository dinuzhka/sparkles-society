const mongoose = require('mongoose');

const visitSchema = mongoose.Schema(
    {
        count: {
            type: Number,
            unique: true,
            required: true,
            default: 0
        }
    },
    {
		timestamps: true,
	}
)

exports.Visit = mongoose.model("visit", visitSchema);