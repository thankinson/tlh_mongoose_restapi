require("./db/connection");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const actorRouter = require("./actors/actorsRoutes")
const app = express();
const port = 5000;

app.use(express.json());
app.use(movieRouter);
app.use(actorRouter);

app.listen(port, () => {console.log(`Listening on port ${port}`)})