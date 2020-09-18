const express = require("express");

const router = express.Router();

const Kosmonaut = require("../../models/Kosmonaut");

//GET ROUTE
router.get("/", (req, res) => {
  Kosmonaut.find().then((kosmonauti) => res.json(kosmonauti));
});

//POST ROUTE
router.post("/", (req, res) => {
  const newKosmonaut = new Kosmonaut({
    id: req.body.id,
    meno: req.body.meno,
    priezvisko: req.body.priezvisko,
    datum: req.body.datum,
    loadDate: req.body.loadDate,
    schopnost: req.body.schopnost,
  });
  newKosmonaut.save().then((kosmonaut) => res.json(kosmonaut));
});

//DELETE ROUTE
router.delete("/:id", (req, res) => {
  Kosmonaut.findById(req.params.id).then((kosmonaut) =>
    kosmonaut
      .remove()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(404).json({ success: false }))
  );
});

//UPDATE ROUTE
router.put("/:id", (req, res) => {
  const update = req.body;
  const updatedKosmonaut = {
    _id: update._id,
    meno: update.meno,
    priezvisko: update.priezvisko,
    datum: update.datum,
    loadDate: update.loadDate,
    schopnost: update.schopnost,
  };

  Kosmonaut.updateOne({ _id: req.params.id }, updatedKosmonaut).then((res) => {
    console.log("ok");
    res.status(200).json({ success: true });
  });
});

module.exports = router;
