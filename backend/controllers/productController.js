const uuid = require('uuid')
const path = require('path')
const { Products } = require('../models/models')
const ApiError = require('../errors/apiErrors')


class productController {
    async create(req, res, next){
    try {
            const {title, price, categoryId, info} =req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const product = await Products.create({title, price, categoryId, img: fileName})
            
            return res.json(product)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
        async getAll(req,res){
        
    }
    async getOne(req, res){

    }
}

module.exports = new productController();