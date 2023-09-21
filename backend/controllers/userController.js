const ApiError = require('../errors/apiErrors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, CartUser} = require('../models/models')

class userController {
    async registration(req, res){
        const {email, name, password, role} = req.body
        if(!email || !password){
            return  next(ApiError.badRequest("Wrong login or password"))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest("A user with this email already exists"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, name, role, password: hashPassword})
        const userCart = CartUser.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, name: user.name, email: user.email, role: user.role}, 
            process.env.SECRET_KEY, {expiresIn: '24h'}
            )
        return res.json({token})
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
