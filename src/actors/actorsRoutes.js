const { Router} = require("express");
const { addActor, listActor, updateActor, deleteActor } = require("./actorsControllers")
const actorRouter = Router();

// endpoints
actorRouter.post("/actors", addActor);
actorRouter.get("/actors", listActor);
actorRouter.patch("/actors", updateActor);
actorRouter.delete("/actors", deleteActor)

module.exports = actorRouter;
