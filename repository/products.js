const Product = require('../models/products');

const saveProduct = async (title, price, link, videoId) => {
    return new Promise ((resolve, reject) => {
        const product = new Product({
            title: title,
            price: price,
            link: link,
            video: videoId,
        })

        product.save()
            .then(productResult => {
                resolve(productResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

const findByVideoIdProducts = async (videoId) => {
    return new Promise ((resolve, reject) => {
        Product.find({video: videoId}).populate('video')
            .then(productResult => {
                resolve(productResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = {
    saveProduct,
    findByVideoIdProducts,
}