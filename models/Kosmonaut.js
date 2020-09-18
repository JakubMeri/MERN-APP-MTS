const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KosmonautSchema = new Schema({
  meno: String,
  priezvisko: String,
  datum: String,
  loadDate: String,
  schopnost: String,
});

module.exports = Kosmonaut = mongoose.model("kosmonaut", KosmonautSchema);
