const Comment = require('../models/comments');

const saveComment = async (commentStr, userId, videoId) => {
    return new Promise ((resolve, reject) => {
        const comment = new Comment({
            comment: commentStr,
            user: userId,
            video: videoId,
        });

        comment.save()
            .then(commentResult => {
                resolve(commentResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

const findByVideoIdComments = async (videoId) => {
    return new Promise ((resolve, reject) => {
        Comment.find({video: videoId}).populate('video', 'url').populate('user', 'username')
            .then(commentResult => {
                resolve(commentResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = {
    saveComment,
    findByVideoIdComments,
}