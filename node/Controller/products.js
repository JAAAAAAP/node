const Product = require('../Model/Products')

exports.read = async (req,res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({ _id : id}).exec();
        res.send(product)
    }catch (error) {
        console.log(error)
    }
}
exports.list = async (req,res) => {
    try {
        const product = await Product.find({}).exec()
        res.send(product)
    }catch(err){
        console.log(err)
    }
}
exports.create = async (req,res) => {
    try {
        console.log(req.body)
        const product = await Product(req.body).save()

        res.send(product)
    }catch(err){
        console.log('error '+err)
    }
}
exports.update = async (req,res) => {
    try {
        const id = req.params.id
        const update = await Product.findOneAndUpdate({_id : id},req.body,{ new: true}).exec()
        res.send(update)
    }catch(err){
        console.log(err)
    }
}
exports.remove = async (req,res) => {
    try {
        const id = req.params.id
        const remove = await Product.findOneAndDelete({_id : id}).exec()
        res.send(remove)
    }catch(err){
        console.log(err)
    }
}