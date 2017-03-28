const Router = require("express").Router,
    passport = require('passport');

const controllerFactory = {
    create(data) {
        return {
            getAll(req, res) {
                data.getCards({}, 3)
                    .then(cards => res.status(200).json(cards))
                    .catch(error => {
                        res.status(500).json(error);
                    });
            },
            create(req, res) {
                let card = req.body;
                data.createCard(card)
                    .then(card => {
                        res.status(201).json({ message: 'Card created successfully!' });
                    })
                    .catch(error => res.status(500).json(error));
            }
        };
    }
};

module.exports = (data) => {
    const router = new Router();
    const controller = controllerFactory.create(data);

    router.get("/all",
            controller.getAll)
        .post("/",
            //auth.isAuthenticated,
            controller.create);
    return router;
};