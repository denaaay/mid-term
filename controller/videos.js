const videoRepo = require('../repository/videos');

const saveVideos = async (req, res) => {
    try {
        const url = req.body.url;

        const videoResult = await videoRepo.saveVideos(url);
        res.status(201).json({
            status_code: 201,
            message: "success creating videos",
            data: videoResult,
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message,
        });
        return;
    }
}

const findVideos = async (req, res) => {
    try {
        const videoResult = await videoRepo.findVideos();
        res.status(200).json({
            status_code: 200,
            message: "success getting all videos",
            data: videoResult,
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message,
        });
        return;
    }
}

const findByIdVideos = async (req, res) => {
    try {
        const id = req.params.id;

        const videoResult = await videoRepo.findByIdVideos(id);
        if (!videoResult) {
            res.status(400).json({
                status_code: 400,
                message: "video not found",
            });
            return;
        }

        res.status(200).json({
            status_code: 200,
            message: "success getting videos by id",
            data: videoResult,
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message,
        });
        return;
    }
}

module.exports = {
    saveVideos,
    findVideos,
    findByIdVideos,
}