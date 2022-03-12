const { Router } = require("express");
const { addMovie, listMovie} = require("./movieControllers");
const movieRouter = Router();

// endpoints
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovie);

module.exports = movieRouter;
