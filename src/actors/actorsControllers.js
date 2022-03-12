const Cast = require("./actorsModel");

exports.addActor = async (req, res) => {
    try {
        const newActor = await Cast.create(req.body);
        res.status(200).send({Actor: newActor});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

exports.listActor = async (req, res) => {
    try {
        const actors = await Cast.find({});
        res.status(200).send({allActors: actors})
    } catch (error) {
        console.log(error)
        res.status(500).snd({err: error.message})
    }
}