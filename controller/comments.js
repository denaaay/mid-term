const repoComment = require('../repository/comments');
const repoVideo = require('../repository/videos');

const saveComment = async (req, res) => {
    try {
        const commentStr = req.body.comment;
        const userId = req.session.userId;
        const videoId = req.body.video_id;

        const videoResult = await repoVideo.findByIdVideos(videoId);
        if (!videoResult) {
            res.status(400).json({
                status_code: 400,
                message: "video not found"
            });
            return;
        }

        const commentResult = await repoComment.saveComment(commentStr, userId, videoId);
        res.status(201).json({
            status_code: 201,
            message: "success creating comment",
            data: commentResult
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

const findByVideoIdComments = async (req, res) => {
    try {
        const videoId = req.params.videoId;

        const videoResult = await repoVideo.findByIdVideos(videoId);
        if (!videoResult) {
            res.status(404).json({
                status_code: 404,
                message: "video not found"
            });
            return;
        }

        const commentResult = await repoComment.findByVideoIdComments(videoId);
        res.status(200).json({
            status_code: 200,
            message: "success getting comment by video id",
            data: commentResult,
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
    saveComment,
    findByVideoIdComments,
}