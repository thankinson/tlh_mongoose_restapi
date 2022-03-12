const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie})
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

exports.listMovie = async (req, res) =>{
    try {
        if (req){
            const movies = await Movie.findOne({[req.param.filterKey]: req.param.filterVal});
            res.status(200).send({movie: movies});
        } else {
            const movies = await Movie.find({});
            res.status(200).send({allMovie: movies});
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message});
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const movies = await Movie.updateOne(
            { [req.param.filterKey]: req.param.filterVal },
            { [req.param.updateKey]: req.param.updateVal }
        );
        res.status(200).send({update: movies});
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message});
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const remove = await Movie.deleteOne({[re.param.filterKey]: req.param.deleteValue});
        res.status(200).send({movie: remove})
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
}