const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const kosmonauti = require("./routes/api/kosmonauti");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, OPTIONS"
  );
  next();
});

const PORT = process.env.PORT || 5000;

//DB_CONFIG

const db = require("./config/keys").mongoURI;

//Pripojenie DB

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONNECTED"))
  .catch((err) => console.log(err));

//ROUTES
app.use("/api/kosmonauti", kosmonauti);

//PRODUKCIA
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
