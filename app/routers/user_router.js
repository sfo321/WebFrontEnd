const Router = require("express").Router,
    auth = require('../middleware/auth-middleware'),
    passport = require('passport'),
    dataMiddleware = require('../middleware/data-middleware');

const controllerFactory = {
    create(data) {
        return {
            getAll(req, res) {
                data.getUsers({}, 20)
                    .then(users => res.status(200).json(users))
                    .catch(error => {
                        res.status(500).json(error);
                    });
            },
            getById(req, res) {
                data.findById(req.id)
                    .then(user => res.status(200).json(user))
                    .catch(error => {
                        res.status(500).json(error);
                    });
            },
            getByUsername(req, res) {
                data.findByUsername(req.username)
                    .then(user => res.status(200).json(user))
                    .catch(error => {
                        res.status(500).json(error);
                    });
            },
            loginLocal(req, res, next) {
                const auth = passport.authenticate('local', function(error, user) {
                    if (error) {
                        next(error);
                        return;
                    }

                    if (!user) {
                        res.json({
                            success: false,
                            message: 'Invalid name or password!'
                        });
                    }

                    req.login(user, error => {
                        if (error) {
                            next(error);
                            return;
                        }
                        res.status(200).json({
                            id: req.session.passport.user,
                            success: true,
                            message: 'Login successful!'
                        });
                    });
                });

                auth(req, res, next);
            },
            logout(req, res) {
                req.logout();
                res.status(200).json({
                    success: true
                });
            },
            register(req, res) {
                let user = req.body;
                data.createUser(user)
                    .then(dbUser => {
                        res.status(201).json({ message: 'User created successfully!' });
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
            auth.isInRole('admin'),
            auth.isAuthenticated,
            controller.getAll)
        .get("/:id",
            auth.isAuthenticated,
            controller.getById)
        .get("/:username",
            auth.isAuthenticated,
            controller.getByUsername)
        .post("/",
            controller.register)
        .post("/login",
            controller.loginLocal)
        .post("/logout",
            controller.logout);

    return router;
};