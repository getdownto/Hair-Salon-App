const models = require('../models');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Team.find()
                .then((team) => {
                    if (team.length === 0) {
                        models.Team.create({ name: 'Jane Roe', imageUrl: 'https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg', position: 'hair stylist' })
                        models.Team.create({ name: 'Sarah Jones', imageUrl: 'https://image.freepik.com/free-photo/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling_295783-39.jpg', position: 'hair stylist' })
                        models.Team.create({ name: 'John Doe', imageUrl: 'https://image.freepik.com/free-photo/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg', position: 'barber' })
                        models.Team.create({ name: 'Lisa Carter', imageUrl: 'https://image.freepik.com/free-photo/portrait-expressive-woman-posing-studio_344912-614.jpg', position: 'makeup artist' })
                    }
                    res.send(team)
                })
                .catch(next);
        },
        // single: (req, res, next) => {
        //     const id = req.params.id;

        //     models.Team.findOne({_id: id})
        //         .then((teamMember) => res.send(teamMember))
        //         .catch(next);
        // }
    },

    post: (req, res, next) => {
        const { name, imageUrl, position } = req.body;
        const { _id } = req.user;

        models.Team.create({ name, imageUrl, position })
            // .then((created) => {
            //     return Promise.all([
            //         models.User.updateOne({ _id }, { $push: { posts: createdOrigami } }),
            //         models.Origami.findOne({ _id: createdOrigami._id })
            //     ]);
            // })
            .then((createdTeamMember) => res.send(createdTeamMember))
            .catch(next)
    },

    // put: (req, res, next) => {
    //     const id = req.params.id;
    //     const { destination, startDate, imageUrl, description, duration, price, additionalTrips } = req.body;
    //     models.Travel.update({ _id: id }, { destination, startDate, imageUrl, description, duration, price, additionalTrips: [...additionalTrips], participants: [] })
    //         .then((updatedTravel) => res.send(updatedTravel))
    //         .catch(next)
    // },

    // delete: (req, res, next) => {
    //     const id = req.params.id;
    //     models.Travel.deleteOne({ _id: id })
    //         .then((removedTravel) => res.send(removedTravel))
    //         .catch(next)
    // }
};