const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SneakerSchema = new Schema({
        name: String,
        ref: String,
        size: Number,
        description: String,
        price: Number,
        category: { type: String, enum: ["men", "women","kids"]},
        id_tags: [{type: Schema.Types.ObjectId, ref:'tags'}],
        image: String
})

const SneakerModel = mongoose.model("sneaker", SneakerSchema);

module.exports = SneakerModel;
