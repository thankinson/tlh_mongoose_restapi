const { Router } = require("express");
const { addMovie, listMovie, deleteMovie, updateMovie} = require("./movieControllers");
const movieRouter = Router();

// endpoints
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovie);
movieRouter.delete("/movie", deleteMovie );
movieRouter.patch("/movie", updateMovie)

module.exports = movieRouter;
