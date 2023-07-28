const repoProduct = require('../repository/products');
const repoVideo = require('../repository/videos');

const saveProduct = async (req, res) => {
    try {
        const title = req.body.title;
        const price = req.body.price;
        const link = req.body.link;
        const videoId = req.body.video_id;

        const videoIdResult = await repoVideo.findByIdVideos(videoId);
        if (!videoIdResult) {
            res.status(400).json({
                status_code: 400,
                message: "video not found",
            });
            return;
        }
        const productResult = await repoProduct.saveProduct(title, price, link, videoId);

        res.status(201).json({
            status_code: 201,
            message: "success creating product",
            data: productResult,
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message
        });
        return;
    }
}

const findByVideoIdProducts = async (req, res) => {
    try {
        const videoId = req.params.videoId;

        const videoIdResult = await repoVideo.findByIdVideos(videoId);
        if (!videoIdResult) {
            res.status(400).json({
                status_code: 400,
                message: "video not found",
            });
            return;
        }

        const productResult = await repoProduct.findByVideoIdProducts(videoId);
        res.status(200).json({
            status_code: 200,
            message: "success getting product by video id",
            data: productResult,
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message
        });
        return;
    }
}

module.exports = {
    saveProduct,
    findByVideoIdProducts,
}