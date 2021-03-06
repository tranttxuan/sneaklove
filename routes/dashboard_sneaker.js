const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("./../models/Sneaker");
const TagModel = require("./../models/Tag")
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");

// show collections sneakers Product /dashboard
router.get("/",protectPrivateRoute, async (req, res, next) => {
        try {
                const tags = await TagModel.find()
                const sneakers = await SneakerModel.find().populate("tag");
                console.log(sneakers[0].id_tags)
                res.render("products", { sneakers, tags });
        } catch (err) {
                next(err);
        }
})
module.exports = router;
