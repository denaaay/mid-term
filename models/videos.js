const mongoose = require('mongoose');
const videosSchema = new mongoose.Schema({
    url: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("Video", videosSchema);