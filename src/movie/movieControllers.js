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

exports.listMovie = async (req, res) => {
    try {
        if (req.body.title){
            const listOne = await Movie.findOne({where: {title: req.body.title}});
            console.log(listOne)
            res.status(200).send({movie: listOne})
        } else {
            const movies = await Movie.findAll({});
            res.status(200).send({allMovie: movies});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    }
}

// exports.updateMovie = async (req, res) => {
//     try {
//         const findMovie = await Movie.findOne({where: {title: req.body.title}});
//         if (findMovie){
//             const movies = await Movie.update({where: { title: req.body.title }});
//             res.status(200).send({update: movies});
//         } else {
//             res.status(500).send({err: error.message})
//         }
//         // const movies = await Movie.update(
//         //     { title: req.body.title },
//         //     {where:{ title: req.body.title }}
//         // );
//         // res.status(200).send({update: movies});
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({err: error.message});
//     }
// };

exports.deleteMovie = async (req, res) => {
    try {
        const remove = await Movie.destroy({where: {title: req.body.title}});
        res.status(200).send({movie: remove})
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
}