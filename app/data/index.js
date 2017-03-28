'use strict';

const User = require('../models/User'),
    Image = require('../models/Image'),
    Card = require('../models/Card'),
    mongoose = require('mongoose'),
    hashing = require('../utils/hashing');

mongoose.connect('mongodb://localhost/web');
mongoose.Promise = global.Promise;

module.exports = {
    getUsers(cb, limit) {
        return User.find(cb).limit(+limit);
    },
    findById(id) {
        return User.findById(id);
    },
    findByUsername(username) {
        return User.findOne({ username });
    },
    createUser(user) {

        const salt = hashing.generateSalt(),
            passHash = hashing.hashPassword(salt, user.password);

        const newUser = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            role: user.role,
            imageUrl: user.imageUrl,
            passHash,
            salt
        };

        return User.create(newUser);
    },
    getImages(cb, limit) {
        return Image.find(cb).limit(+limit);
    },
    findByTitle(title) {
        return Image.findOne({ title });
    },
    createImage(image) {
        const newImage = {
            imageUrl: image.imageUrl,
            title: image.title,
            postedBy: image.postedBy
        };

        return Image.create(newImage);
    },
    getCards(cb, limit) {
        return Card.find(cb).limit(+limit);
    },
    createCard(card) {
        const newCard = {
            heading: card.heading,
            content: card.content
        };
        return Card.create(newCard);
    }
    // createPaste(paste, author) {
    //     const newPaste = { content: paste.content, lang: paste.lang };

    //     if (author) {
    //         newPaste.author = {
    //             username: author.username
    //         }
    //     }

    //     return Paste.create(newPaste);
    // },
    // getPagedPastes(pageNumber, pageSize, options) {

    //     const { widthDeleted, withDetails } = options;

    //     const query = Paste.find(withDeleted ? {} : { deletedAt: undefined })
    //         .skip(pageNumber * pageSize)
    //         .limit(pageSize);

    //     return detailed ? query : query.select('content lang');

    // },
    // pasteById(id) {
    //     return Paste.findById(id);
    // },
    // updatePasteById(id, updateOptions) {
    //     return Paste.findByIdAndUpdate(id, updateOptions);
    // },
    // removePasteById(id) {
    //     return Paste.findByIdAndUpdate(id, {
    //         deletedAt: new Date()
    //     });
    // },
    // createCommentForPaste(pasteId, comment, author) {

    //     const newComment = {
    //         content: comment.content
    //     };

    //     if (author) {
    //         newComment.author = {
    //             username: author.username
    //         };
    //     }

    //     return Paste.findByIdAndUpdate(pasteId, {
    //         $push: { comments: newComment }
    //     });
    //}
};