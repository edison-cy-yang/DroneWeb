const mongoose = require('mongoose');
const { Schema } = mongoose;

const droneSchema = new Schema( {
    manufacturer: String,
    model: String,
});

mongoose.model('drones', droneSchema);