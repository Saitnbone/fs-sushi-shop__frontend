const ApiError = require('../errors/apiErrors')

class userController {
    async registration(req, res){

    }
    async login(req,res){

    }
    async check(req, res, next){
        const {id} = req.query
        if(!id){
           return next(ApiError.badRequest('Not found ID'))
        }
        res.json(id)
    }
}

module.exports = new userController();
