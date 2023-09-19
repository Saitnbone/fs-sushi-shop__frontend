const {Category} = require('../models/models')
const ApiError = require('../errors/apiErrors')

class categoryController {
    async create(req, res){
        const{title} = req.body
        const category = await Category.create({title})
        return res.json(category)
    }
    async getAll(req, res){

    }
    async getOne(req, res){
       
    }
}

module.exports = new categoryController();