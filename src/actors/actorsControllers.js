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
        if (req.body.actor){
            const listOne = await Cast.findOne({where: {actor: req.body.actor}});
            res.status(200).send({actorList: listOne});
        } else {
        const listAll = await Cast.findAll({});
        res.status(200).send({allActors: listAll});
        }
    } catch (error) {
        console.log(error)
        res.status(500).snd({err: error.message});
    }
};

exports.updateActor = async (req, res) => {
    try {
        const actor = await Cast.update(
            {[req.body.updateKey]: req.body.updateVal},
            {where: {[req.body.filterKey]: req.body.filterVal }});
        res.status(200).send({updated: actor})
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

exports.deleteActor = async (req, res) => {
    try {
        const remove = Cast.destroy({where: {actor: req.body.actor}})
        res.status(200).send({actors: remove});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};
