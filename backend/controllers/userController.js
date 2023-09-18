const ApiError = require('../errors/apiErrors')

class userController {
    async registration(req, res){

    }
    async login(req,res){

    }
    async check(req,res){
        const {id} = req.query
        res.json(id)
        if(!id){
           return next(ApiError.badRequest('Не задан ID'))
        }
    }
}

module.exports = new userController();
