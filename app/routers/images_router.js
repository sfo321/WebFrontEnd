const Router = require("express").Router,
    auth = require('../middleware/auth-middleware'),
    passport = require('passport'),
    dataMiddleware = require('../middleware/data-middleware');

const controllerFactory = {
    create(data) {
        return {
            getAll(req, res) {
                data.getImages({}, 20)
                    .then(images => res.status(200).json(images))
                    .catch(error => {
                        res.status(500).json(error);
                    });
            },
            getByTitle(req, res) {
                data.findByTitle(req.title)
                    .then(image => res.status(200).json(image))
                    .catch(error => {
                        res.status(500).json(error);
                    });
            },
            create(req, res) {
                let image = req.body;
                data.createImage(image)
                    .then(image => {
                        res.status(201).json({ message: 'Image added successfully!' });
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
        .get("/title",
            controller.getByTitle)
        .post("/",
            //auth.isAuthenticated,
            controller.create);
    return router;
};