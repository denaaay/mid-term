const express = require('express');
const router = express.Router();
const User = require('../models/users');

const auth = require('../controller/auth');
const users = require('../controller/users');
const videos = require('../controller/videos');
const products = require('../controller/products');
const comments = require('../controller/comments');

// auth
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.post("/register", users.saveUser);

// users
router.get("/user", auth.checkAuth, users.findUser);
router.get("/user/:id", auth.checkAuth, users.findByIdUser);
router.delete("/user/:id", auth.checkAuth, users.deleteUser);

// videos
router.post("/video", auth.checkAuth, videos.saveVideos);
router.get("/video", auth.checkAuth, videos.findVideos);
router.get("/video/:id", auth.checkAuth, videos.findByIdVideos);

// products
router.post("/product", auth.checkAuth, products.saveProduct);
router.get("/product/:videoId", auth.checkAuth, products.findByVideoIdProducts);

// comments
router.post("/comment", auth.checkAuth, comments.saveComment);
router.get("/comment/:videoId", auth.checkAuth, comments.findByVideoIdComments);

module.exports = router;