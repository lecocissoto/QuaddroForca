var mongoose =  require("mongoose");
var random = require('mongoose-random');

//Preparing the schema ;)
var Schema = mongoose.Schema;

//Creating the Schema
var wordSchema = new Schema({
    palavra: {type: String, required: true, lowercase: true, trim: true},
    categoria: {type: String, lowercase: true, trim: true, default: "uncategorized"},
    createdAt: {type: Date , default: Date.now},
    active: {type: Boolean, default: true}
});
wordSchema.plugin(random);

//Creating the model
var Word = mongoose.model("Word", wordSchema);

module.exports = Word;
