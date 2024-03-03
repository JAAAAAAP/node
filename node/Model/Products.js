const monggoose = require('mongoose')
const productSchema = monggoose.Schema({
    name: String,
    detail:{
        type: String
    },
    price: {
        type:Number
    }
},{timestamps: true})
module.exports = monggoose.model('products',productSchema)