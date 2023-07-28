const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    link: {
        required: true,
        type: String,
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }
});

module.exports = mongoose.model('Product', productSchema);