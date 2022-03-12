const { Router} = require("express");
const { addActor, listActor } = require("./actorsControllers")
const actorRouter = Router();

// endpoints
actorRouter.post("/actors", addActor);
actorRouter.get("/actors", listActor);

module.exports = actorRouter;
